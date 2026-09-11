import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("size-9 shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="abi-g" x1="8" y1="36" x2="34" y2="4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1558c4" />
          <stop offset="1" stopColor="#4ea3ff" />
        </linearGradient>
      </defs>
      <path
        fill="url(#abi-g)"
        d="M20 3.2 37.4 36.2H29.6L20 18.4 10.4 36.2H2.6L20 3.2Z"
      />
      <path fill="#7ec2ff" d="M20 14.2 27.4 28.2h-4.4L20 22.2l-3 6H12.6L20 14.2Z" />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="ABI Tech home">
      <LogoMark />
      <span className="leading-tight">
        <span className="block text-[17px] font-extrabold tracking-tight text-fg">
          ABI Tech
        </span>
        {!compact ? (
          <span className="hidden sm:block text-[10px] font-medium tracking-[0.04em] text-fg-subtle">
            AI Business Implementation Technology
          </span>
        ) : null}
      </span>
    </Link>
  );
}
