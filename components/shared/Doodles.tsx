import { cn } from "@/lib/utils";

type DoodleProps = {
  className?: string;
  delay?: number;
};

// Garis bawah coretan tangan di bawah nama belakang
export function Squiggle({ className, delay = 1.1 }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 220 14"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
    >
      <path
        d="M3 10 C 40 3, 70 12, 108 7 S 180 4, 217 8"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        className="doodle-draw"
        style={{ animationDelay: `${delay}s` }}
      />
    </svg>
  );
}

// Kilau bintang kecil
export function Spark({ className, delay = 1.5 }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
    >
      <path
        d="M22 2 C 23.5 14, 25 18.5, 42 22 C 25 25.5, 23.5 30, 22 42 C 20.5 30, 19 25.5, 2 22 C 19 18.5, 20.5 14, 22 2 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        className="doodle-draw"
        style={{ animationDelay: `${delay}s` }}
      />
    </svg>
  );
}

// Panah coretan menunjuk ke CTA
export function ArrowScribble({ className, delay = 1.8 }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
    >
      <path
        d="M8 10 C 30 22, 44 34, 50 58 M50 58 l-9 -8 M50 58 l9 -7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="doodle-draw"
        style={{ animationDelay: `${delay}s` }}
      />
    </svg>
  );
}

// Stempel melingkar berputar (teks + ✳ di tengah)
export function Stamp({
  text,
  id,
  className,
}: {
  text: string;
  id: string;
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={cn("relative", className)}>
      <svg viewBox="0 0 138 138" className="stamp-spin h-full w-full">
        <defs>
          <path
            id={id}
            d="M 69,69 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
          />
        </defs>
        <text className="fill-slate-400 text-[12.5px] tracking-[0.22em] uppercase">
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xl text-emerald-300">
        ✳
      </span>
    </div>
  );
}

// Lingkaran coretan untuk kata aksen pada judul section
export function CircleScribble({ className, delay = 0.5 }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 200 90"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
    >
      <path
        d="M128 12 C 66 4, 12 22, 10 46 C 8 72, 62 84, 106 82 C 152 80, 192 66, 190 43 C 188 20, 138 8, 88 12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="doodle-draw"
        style={{ animationDelay: `${delay}s` }}
      />
    </svg>
  );
}
