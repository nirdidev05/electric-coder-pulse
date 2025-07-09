import * as React from "react";
import { motion, useAnimation } from "framer-motion";

export interface RollingTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  inViewOnce?: boolean;
  inViewMargin?: string;
  inView?: boolean;
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string;
  };
}

export const RollingText = React.forwardRef<HTMLSpanElement, RollingTextProps>(
  (
    {
      text,
      inViewOnce = true,
      inViewMargin = "0px",
      inView = false,
      transition = { duration: 0.5, delay: 0.1, ease: "easeOut" },
      className,
      ...props
    },
    ref
  ) => {
    const controls = useAnimation();
    const [hasAnimated, setHasAnimated] = React.useState(false);
    const spanRef = React.useRef<HTMLSpanElement | null>(null);

    React.useEffect(() => {
      if (inView) {
        controls.start("visible");
        setHasAnimated(true);
      }
    }, [inView, controls]);

    React.useEffect(() => {
      if (!inViewOnce && !inView) {
        controls.start("hidden");
        setHasAnimated(false);
      }
    }, [inView, inViewOnce, controls]);

    // Intersection Observer for inView
    React.useEffect(() => {
      if (typeof window === "undefined" || inView) return;
      const node = spanRef.current;
      if (!node) return;

      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            controls.start("visible");
            setHasAnimated(true);
            if (inViewOnce) observer.disconnect();
          } else if (!inViewOnce) {
            controls.start("hidden");
            setHasAnimated(false);
          }
        },
        { rootMargin: inViewMargin }
      );

      observer.observe(node);

      return () => observer.disconnect();
    }, [controls, inViewOnce, inViewMargin, inView]);

    return (
      <span
        ref={ref || spanRef}
        className={className}
        {...props}
        style={{ display: "inline-block", overflow: "hidden", ...props.style }}
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { y: "100%" },
              visible: { y: "0%" },
            }}
            transition={{
              duration: transition.duration || 0.5,
              delay: (transition.delay || 0) + i * 0.05,
            }}
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    );
  }
);

RollingText.displayName = "RollingText";