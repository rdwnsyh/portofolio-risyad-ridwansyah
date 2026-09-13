import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// Shadcn-style Card: subtle border, bg sedikit lebih terang dari slate-950
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900 hover:shadow-xl hover:shadow-black/40",
        className,
      )}
      {...props}
    />
  );
}
