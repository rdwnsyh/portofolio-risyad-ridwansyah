import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg" | "icon";
};

// Shadcn-style Button sebagai <a> (cocok untuk CTA + link sosial)
export function ButtonLink({
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 active:scale-[0.98]",
        size === "default" && "h-11 px-6 text-sm",
        size === "lg" && "h-12 px-8 text-base",
        size === "icon" &&
          "h-11 w-11 rounded-full hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40",
        variant === "primary" &&
          "bg-emerald-300 text-slate-950 shadow-[0_0_45px_-12px_rgba(52,211,153,0.55)] hover:-translate-y-0.5 hover:bg-emerald-200 hover:shadow-[0_0_55px_-10px_rgba(52,211,153,0.7)]",
        variant === "secondary" &&
          "border border-slate-700 bg-slate-900/60 text-slate-100 backdrop-blur hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-800 hover:shadow-lg hover:shadow-black/40",
        variant === "ghost" &&
          "border border-slate-800 bg-slate-900/50 text-slate-300 backdrop-blur hover:border-slate-500 hover:bg-slate-800 hover:text-white",
        className,
      )}
      {...props}
    />
  );
}
