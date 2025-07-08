import * as React from "react";
import { motion } from "framer-motion";

export interface HighlightTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  className?: string;
}

export const HighlightText = React.forwardRef<HTMLSpanElement, HighlightTextProps>(
  ({ text, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={className}
        {...props}
        style={{ position: "relative", display: "inline-block", ...props.style }}
      >
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            height: "0.5em",
            background: "rgba(84, 146, 174, 0.4)", // yellow highlight, adjust as needed
            zIndex: 0,
            borderRadius: "0.25em",
            pointerEvents: "none",
          }}
        />
        <span style={{ position: "relative", zIndex: 1 }}>{text}</span>
      </span>
    );
  }
);

HighlightText.displayName = "HighlightText";