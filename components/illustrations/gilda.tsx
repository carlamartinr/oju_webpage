import { Anchovy, Olive, Pepper, RedPepper } from "./ingredients";

export function Gilda({
  variant = "classic",
  className,
  decorative = false,
}: {
  variant?: "classic" | "boqueron";
  className?: string;
  decorative?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      className={className}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={
        decorative
          ? undefined
          : `Ilustración de gilda ${variant === "classic" ? "de anchoa" : "de boquerón"}`
      }
    >
      <g transform="rotate(-23 300 300)">
        <g data-skewer>
          <path
            d="M297 39 306 96 303 552 298 572 294 539 295 92Z"
            fill="#b49357"
          />
          <path
            d="M297 44 300 101 299 544"
            stroke="#e0c48a"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="m301 105 1 426" stroke="#8d7348" strokeWidth="1.5" />
        </g>
        <g data-ingredient="bottom-olive">
          <g transform="translate(300 423) rotate(-12)">
            <Olive />
          </g>
        </g>
        <g data-ingredient="lower-pepper">
          <g transform="translate(306 367) rotate(-4)">
            <Pepper />
          </g>
        </g>
        <g data-ingredient="anchovy">
          <g transform="translate(299 290) rotate(4)">
            <Anchovy white={variant === "boqueron"} />
          </g>
        </g>
        {variant === "boqueron" && (
          <g data-ingredient="red-pepper">
            <g transform="translate(302 250) rotate(-3)">
              <RedPepper />
            </g>
          </g>
        )}
        <g data-ingredient="upper-pepper">
          <g transform="translate(300 231) rotate(2)">
            <Pepper />
          </g>
        </g>
        <g data-ingredient="top-olive">
          <g transform="translate(300 157) rotate(-12)">
            <Olive />
          </g>
        </g>
      </g>
    </svg>
  );
}
