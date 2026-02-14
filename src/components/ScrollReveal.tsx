"use client";

import { ReactNode, useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "scale" | "diamond";
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ children, direction = "up", delay = 0, className = "" }: ScrollRevealProps) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const dirClass =
    direction === "left" ? "reveal-left" :
    direction === "right" ? "reveal-right" :
    direction === "scale" ? "reveal-scale" :
    direction === "diamond" ? "reveal-diamond" :
    "reveal-base";

  return (
    <div
      ref={ref}
      className={`${dirClass} ${inView ? "reveal-in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({ end, suffix = "", duration = 2000, className = "" }: CountUpProps) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (inView && !started) setStarted(true);
  }, [inView, started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = end / steps;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, end, duration]);

  return <span ref={ref} className={className}>{count}{suffix}</span>;
}
