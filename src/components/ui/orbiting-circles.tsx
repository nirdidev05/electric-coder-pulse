
"use client";

import { cn } from "@/lib/utils";

export interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      <div
        style={
          {
            "--duration": duration,
            "--radius": radius,
            "--delay": -delay,
          } as React.CSSProperties
        }
        className={cn(
          "absolute flex size-full transform-gpu animate-spin items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1s)] [animation-duration:calc(var(--duration)*1s)] dark:bg-white/10",
          { "[animation-direction:reverse]": reverse },
          className,
        )}
        style={{
          animationTimingFunction: "linear",
          transform: `rotate(0deg) translateX(${radius}px) rotate(0deg)`,
          animationName: "orbit",
        }}
      >
        <div
          className={cn(
            "flex size-10 items-center justify-center rounded-full border bg-background text-foreground shadow-md",
            className,
          )}
          style={{
            transform: reverse ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          {children}
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(${radius}px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(${radius}px) rotate(-360deg);
          }
        }
      `}</style>
    </>
  );
}
