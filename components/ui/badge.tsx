import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline" | "success" | "muted";
};

// Shadcn-style Badge (ringan, tanpa dependensi tambahan)
export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur transition-all duration-300",
        variant === "default" &&
          "border-slate-700/80 bg-slate-900/80 text-slate-200 shadow-sm shadow-black/30 hover:-translate-y-px hover:border-slate-500 hover:text-white",
        variant === "outline" &&
          "border-slate-700/80 bg-transparent text-slate-300 hover:border-slate-500 hover:text-white",
        variant === "success" &&
          "border-emerald-400/25 bg-emerald-400/10 text-emerald-200 shadow-[0_0_25px_-8px_rgba(52,211,153,0.6)]",
        variant === "muted" &&
          "border-slate-800 bg-slate-900/40 text-slate-400",
        className,
      )}
      {...props}
    />
  );
}
