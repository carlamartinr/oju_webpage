import {
  GarlicClove,
  LemonSlice,
  Olive,
  PepperStrip,
  Thyme,
  useSvgIds,
} from "./ingredients";

// Olive layouts are ordered back to front so nearer olives overlap.
const wholeOlives = [
  [236, 250, -18],
  [312, 238, 14],
  [382, 262, -8],
  [180, 292, 24],
  [268, 292, -12],
  [350, 300, 18],
  [424, 306, -20],
  [214, 338, 10],
  [300, 346, -22],
  [386, 346, 8],
];

const crackedOlives = [
  [228, 246, 64],
  [318, 236, -58],
  [392, 266, 70],
  [176, 296, -66],
  [270, 288, 58],
  [356, 302, -70],
  [430, 312, 62],
  [216, 340, -60],
  [306, 350, 66],
  [392, 348, -64],
];

const vessels = {
  // Glazed white bowl with the brand blue band.
  bowl: {
    body: ["#b3ac98", "#f6f2e8", "#e3dccb", "#a49d88"],
    rim: "#f8f5ec",
    lip: "#fffdf6",
    inside: ["#4e5222", "#2c2f12"],
  },
  // Andalusian clay cazuela, honey glazed inside.
  cazuela: {
    body: ["#7a3519", "#c9683b", "#b0512b", "#652912"],
    rim: "#c46a3d",
    lip: "#e39a6c",
    inside: ["#7a4a1c", "#3d230c"],
  },
};

export function Olives({
  seasoned = false,
  className,
  decorative = false,
}: {
  seasoned?: boolean;
  className?: string;
  decorative?: boolean;
}) {
  const ids = useSvgIds();
  const vessel = vessels[seasoned ? "cazuela" : "bowl"];
  const olives = seasoned ? crackedOlives : wholeOlives;
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
          : seasoned
            ? "Ilustración de aceitunas partidas aliñadas en cazuela de barro"
            : "Ilustración de aceitunas manzanilla al limón"
      }
    >
      <defs>
        <radialGradient id={ids("shadow")} cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#152d0b" stopOpacity=".32" />
          <stop offset="1" stopColor="#152d0b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={ids("body")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={vessel.body[0]} />
          <stop offset=".3" stopColor={vessel.body[1]} />
          <stop offset=".72" stopColor={vessel.body[2]} />
          <stop offset="1" stopColor={vessel.body[3]} />
        </linearGradient>
        <radialGradient id={ids("inside")} cx=".45" cy=".35" r=".7">
          <stop offset="0" stopColor={vessel.inside[0]} />
          <stop offset="1" stopColor={vessel.inside[1]} />
        </radialGradient>
      </defs>
      <ellipse
        cx="300"
        cy={seasoned ? 452 : 470}
        rx="210"
        ry="34"
        fill={`url(#${ids("shadow")})`}
      />
      {seasoned ? (
        <>
          <path
            d="M104 300C110 380 168 440 300 442 432 440 490 380 496 300Z"
            fill={`url(#${ids("body")})`}
          />
          <path
            d="M128 372C170 414 230 426 300 426 370 426 430 414 472 372"
            stroke="#4f200d"
            strokeOpacity=".35"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M132 322C140 350 152 368 168 382"
            stroke="#f0b48c"
            strokeOpacity=".45"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <path
            d="M109 304C126 406 188 472 301 474 416 476 481 413 493 302Z"
            fill={`url(#${ids("body")})`}
          />
          <path
            d="M122 348C160 414 212 446 302 448 390 450 444 412 478 350"
            stroke="#0d3866"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M131 370C168 426 216 454 302 456 384 458 436 426 468 374"
            stroke="#0d3866"
            strokeOpacity=".6"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M138 330C146 368 160 392 178 412"
            stroke="#fff"
            strokeOpacity=".8"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </>
      )}
      <ellipse cx="300" cy="300" rx="196" ry="106" fill={vessel.rim} />
      <ellipse
        cx="300"
        cy="298"
        rx="178"
        ry="94"
        fill={`url(#${ids("inside")})`}
      />
      {olives.map(([x, y, angle], index) => (
        <g
          key={index}
          transform={`translate(${x} ${y}) rotate(${angle}) scale(${seasoned ? ".8" : ".74"})`}
        >
          <Olive tone={seasoned ? "muted" : "bright"} cracked={seasoned} />
        </g>
      ))}
      {seasoned ? (
        <>
          <g transform="translate(262 252) rotate(-14)">
            <PepperStrip />
          </g>
          <g transform="translate(372 318) rotate(18)">
            <PepperStrip />
          </g>
          <g transform="translate(180 330) rotate(-30) scale(.85)">
            <PepperStrip />
          </g>
          <g transform="translate(330 268) rotate(-20) scale(.8)">
            <GarlicClove />
          </g>
          <g transform="translate(222 300) rotate(30) scale(.7)">
            <GarlicClove />
          </g>
          <g transform="translate(410 290) rotate(-15) scale(.9)">
            <Thyme />
          </g>
          <g transform="translate(270 348) rotate(10) scale(.8)">
            <Thyme />
          </g>
        </>
      ) : (
        <>
          <g transform="translate(262 262) rotate(-8) scale(1 .62)">
            <LemonSlice />
          </g>
          <g transform="translate(388 318) rotate(10) scale(.85 .55)">
            <LemonSlice />
          </g>
          <path
            d="M180 316q22-16 44-8t40-4M322 246q26-10 44 4"
            stroke="#e8bd2c"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <g transform="translate(330 288) rotate(-12) scale(.9)">
            <Thyme />
          </g>
          <g transform="translate(230 356) rotate(8) scale(.75)">
            <Thyme />
          </g>
        </>
      )}
      <path
        d="M112 300C120 354 208 398 300 398 392 398 480 354 488 300"
        stroke={vessel.rim}
        strokeWidth="16"
      />
      <path
        d="M110 296C118 350 206 396 300 396 394 396 482 350 490 296"
        stroke="#000"
        strokeOpacity=".12"
        strokeWidth="3"
      />
      <path
        d="M160 240C196 214 246 200 300 199"
        stroke={vessel.lip}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M112 306C124 350 190 392 262 402"
        stroke={vessel.lip}
        strokeOpacity=".8"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
