"use client";
import { useEffect, useState } from "react";
import { useInView } from "./useInView";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  suffix?: string;
}

export function useCountUp({ end, duration = 2000, suffix = "" }: UseCountUpOptions) {
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

  return { ref, display: `${count}${suffix}` };
}
