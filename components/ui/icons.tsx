import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowIcon({ className = "size-5", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M4 12h15M13 5l7 7-7 7" />
    </svg>
  );
}

export function BagIcon({ className = "size-5", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M5 8h14l1 13H4L5 8Z" />
      <path d="M8 9V6a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function Wave({ className = "h-5 w-20", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 100 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M1 12C9 0 17 0 25 12s16 12 24 0S65 0 73 12s16 12 26 0" />
    </svg>
  );
}

export function Sun({ className = "size-12", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <circle cx="40" cy="40" r="16" />
      {Array.from({ length: 16 }, (_, i) => (
        <path key={i} d="M40 5v12" transform={`rotate(${i * 22.5} 40 40)`} />
      ))}
    </svg>
  );
}
