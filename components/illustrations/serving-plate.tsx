import { useSvgIds } from "./ingredients";

/**
 * Glazed plate seen from above for the hero still life.
 * `data-plate` lets the hero animate it.
 */
export function ServingPlate({ className }: { className?: string }) {
  const ids = useSvgIds();
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden="true"
      data-plate
      className={className}
      overflow="visible"
    >
      <defs>
        <radialGradient id={ids("cast")} cx=".5" cy=".5" r=".5">
          <stop offset=".86" stopColor="#152d0b" stopOpacity=".2" />
          <stop offset="1" stopColor="#152d0b" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={ids("glaze")} cx=".38" cy=".32" r=".8">
          <stop offset="0" stopColor="#fdfbf5" />
          <stop offset=".7" stopColor="#f3eee2" />
          <stop offset="1" stopColor="#e2dac7" />
        </radialGradient>
        <linearGradient id={ids("well")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d7cdb6" />
          <stop offset=".5" stopColor="#efe9dc" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <circle cx="308" cy="312" r="286" fill={`url(#${ids("cast")})`} />
      <circle cx="300" cy="300" r="266" fill={`url(#${ids("glaze")})`} />
      <circle cx="300" cy="300" r="266" stroke="#cfc4ab" strokeWidth="1.5" />
      <circle cx="300" cy="300" r="248" stroke="#0d3866" strokeWidth="6" />
      <circle
        cx="300"
        cy="300"
        r="237"
        stroke="#0d3866"
        strokeOpacity=".55"
        strokeWidth="1.5"
      />
      <circle
        cx="300"
        cy="300"
        r="180"
        stroke={`url(#${ids("well")})`}
        strokeWidth="12"
      />
      <path
        d="M104 188A226 226 0 0 1 188 104"
        stroke="#fff"
        strokeWidth="7"
        strokeLinecap="round"
        strokeOpacity=".9"
      />
      <path
        d="M470 452A226 226 0 0 1 440 480"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeOpacity=".7"
      />
    </svg>
  );
}
