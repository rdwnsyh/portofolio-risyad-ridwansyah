"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode, type Ref } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "h3" | "article";
  className?: string;
  style?: CSSProperties;
  /** Jeda animasi dalam ms (seperti --reveal-delay di referensi) */
  delay?: number;
  variant?: "fade-up" | "slide-right" | "scale";
};

// Reveal saat scroll (pengganti ringan ScrollReveal framer-motion di referensi)
export function Reveal({
  children,
  as = "div",
  className,
  style,
  delay = 0,
  variant = "fade-up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("is-in");
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref as Ref<HTMLDivElement>}
      className={cn(
        "reveal",
        variant === "slide-right" && "reveal--slide-right",
        variant === "scale" && "reveal--scale",
        className,
      )}
      style={{ "--reveal-delay": `${delay}ms`, ...style } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
