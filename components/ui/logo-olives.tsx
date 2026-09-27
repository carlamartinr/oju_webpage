import { useId, type SVGProps } from "react";

/** Reuses the original logo's olive sprig, preserving its exact silhouette. */
export function LogoOlives({
  className = "size-12",
  ...props
}: SVGProps<SVGSVGElement>) {
  const id = useId();
  return (
    <svg
      viewBox="510 50 620 460"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <clipPath id={`${id}-crop`}>
          <path d="M510 50H1130V300H910V510H700L680 380H550V350H510Z" />
        </clipPath>
        <mask
          id={`${id}-alpha`}
          maskUnits="userSpaceOnUse"
          x="510"
          y="50"
          width="620"
          height="460"
          style={{ maskType: "alpha" }}
        >
          <image href="/oju.png" width="1429" height="1101" />
        </mask>
      </defs>
      <rect
        x="510"
        y="50"
        width="620"
        height="460"
        fill="currentColor"
        clipPath={`url(#${id}-crop)`}
        mask={`url(#${id}-alpha)`}
      />
    </svg>
  );
}
