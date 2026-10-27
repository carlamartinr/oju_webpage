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

export function WhatsAppIcon({ className = "size-5", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M20 11.5a8 8 0 0 1-11.8 7L4 19.8l1.3-4.2A8 8 0 1 1 20 11.5Z" />
      <path d="M8.3 7.8c-.3.4-.4.9-.2 1.4a10 10 0 0 0 6.7 6.7c.5.2 1 .1 1.4-.2l.8-.8-2.6-1.3-1 1a8.4 8.4 0 0 1-4-4l1-1-1.3-2.6-.8.8Z" />
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

export function ExternalIcon({ className = "size-4", ...props }: IconProps) {
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
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
