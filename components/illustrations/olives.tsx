import { Olive } from "./ingredients";

export function Olives({
  seasoned = false,
  className,
  decorative = false,
}: {
  seasoned?: boolean;
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
          : `Ilustración de aceitunas ${seasoned ? "aliñadas" : "al limón"}`
      }
    >
      <path
        d="M109 304C126 406 188 472 301 474 416 476 481 413 493 302Z"
        fill="#254b67"
      />
      <path
        d="M131 343C167 410 211 444 302 447 385 449 444 410 469 354"
        stroke="#607b88"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <ellipse cx="300" cy="301" rx="192" ry="112" fill="#c8c3a0" />
      <ellipse cx="300" cy="297" rx="177" ry="100" fill="#636a33" />
      {[
        [214, 256, -22],
        [302, 235, 20],
        [386, 266, -15],
        [170, 312, 30],
        [264, 306, -17],
        [354, 318, 12],
        [427, 320, -25],
        [224, 361, 15],
        [321, 367, -25],
        [393, 367, 10],
      ].map(([x, y, angle], index) => (
        <g
          key={index}
          transform={`translate(${x} ${y}) rotate(${angle}) scale(.8)`}
        >
          <Olive />
        </g>
      ))}
      <path
        d="M112 301C121 367 215 411 304 410 395 409 481 365 490 302"
        stroke="#e3d9b5"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M126 336C153 382 234 418 306 417 377 416 449 385 477 341"
        stroke="#0d3866"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {seasoned ? (
        <g fill="#af5136">
          <path d="m240 247 31-10 12 19-29 8Z" />
          <path d="m328 332 29-3 8 16-27 7Z" />
          <path d="m177 333 22-9 15 21-21 7Z" />
          <path d="m390 279 20 8-8 23-16-12Z" />
        </g>
      ) : (
        <g stroke="#d4b13f" strokeWidth="7" strokeLinecap="round">
          <path d="M231 274q29-3 37 14t31 10M338 233q-15 18 4 30M363 357q13 18 40 6" />
        </g>
      )}
      <g stroke="#43562b" strokeWidth="3" strokeLinecap="round">
        <path d="m261 333 35 27m-13-10-2-12m-6 8-14 1M351 272l34 16m-15-7 1-10m-8 7-10 5" />
      </g>
    </svg>
  );
}
