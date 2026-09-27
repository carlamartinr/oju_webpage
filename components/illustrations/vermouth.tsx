import { Olive, useSvgIds } from "./ingredients";

export function Vermouth({
  className,
  decorative = false,
}: {
  className?: string;
  decorative?: boolean;
}) {
  const ids = useSvgIds();
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      className={className}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={
        decorative ? undefined : "Ilustración de vermú con naranja y aceituna"
      }
    >
      <defs>
        <radialGradient id={ids("shadow")} cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#6b2214" stopOpacity=".3" />
          <stop offset=".6" stopColor="#152d0b" stopOpacity=".12" />
          <stop offset="1" stopColor="#152d0b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={ids("liquid")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#4d130b" />
          <stop offset=".3" stopColor="#9c3a22" />
          <stop offset=".55" stopColor="#b8522d" />
          <stop offset="1" stopColor="#4a120a" />
        </linearGradient>
        <linearGradient id={ids("surface")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d27a45" />
          <stop offset="1" stopColor="#8c3019" />
        </linearGradient>
        <linearGradient id={ids("glass")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#dfe6df" stopOpacity=".55" />
          <stop offset=".5" stopColor="#f5f5ec" stopOpacity=".15" />
          <stop offset="1" stopColor="#c9d3cc" stopOpacity=".5" />
        </linearGradient>
        <radialGradient id={ids("orange")} cx=".45" cy=".45" r=".6">
          <stop offset="0" stopColor="#ffc56b" />
          <stop offset=".75" stopColor="#f39a2c" />
          <stop offset="1" stopColor="#d9731a" />
        </radialGradient>
      </defs>
      <ellipse
        cx="306"
        cy="474"
        rx="170"
        ry="26"
        fill={`url(#${ids("shadow")})`}
      />
      <path
        d="M176 203 199 463Q300 511 401 463L424 203Z"
        fill={`url(#${ids("glass")})`}
      />
      <path
        d="m186 278 18 168q96 40 192 0l18-168Z"
        fill={`url(#${ids("liquid")})`}
      />
      <g fill="#f3c9a6" opacity=".16">
        <path d="m222 330 42-8 10 44-44 8Z" />
        <path d="m300 356 46-4 4 46-46 4Z" />
      </g>
      <ellipse
        cx="300"
        cy="279"
        rx="113"
        ry="32"
        fill={`url(#${ids("surface")})`}
      />
      <path
        d="M204 286C240 300 330 304 384 290"
        stroke="#f0a36e"
        strokeOpacity=".5"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <g>
        <path
          d="M232 268 272 250 304 284 264 306Z"
          fill="#f7eee0"
          fillOpacity=".55"
        />
        <path
          d="m280 312 52-24 30 34-48 30Z"
          fill="#f7eee0"
          fillOpacity=".45"
        />
        <path
          d="m238 268 33-13 20 22M288 314l40-19 20 24"
          stroke="#fff"
          strokeOpacity=".85"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
      <g transform="translate(336 196) rotate(-18)">
        <path d="M-58 22A58 58 0 1 1 58 22Z" fill="#df7a1f" />
        <path d="M-52 18A52 52 0 1 1 52 18Z" fill="#fbe7c2" />
        <path d="M-46 16A46 46 0 1 1 46 16Z" fill={`url(#${ids("orange")})`} />
        <g stroke="#fbe7c2" strokeWidth="2.5" strokeLinecap="round">
          {[-80, -50, -20, 10, 40, 70].map((angle) => (
            <path
              key={angle}
              d="M0 12V-32"
              transform={`rotate(${angle} 0 14)`}
            />
          ))}
        </g>
        <path
          d="M-40-8A44 44 0 0 1-12-38"
          stroke="#fff6df"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
      <path
        d="M176 205C190 248 410 248 424 205"
        stroke="#8fa39c"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M176 203C190 170 410 170 424 203"
        stroke="#b7c5bf"
        strokeOpacity=".7"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M176 203 199 463Q300 511 401 463L424 203"
        stroke="#8fa39c"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M204 440Q300 482 396 440L401 463Q300 511 199 463Z"
        fill="#e9efe8"
        fillOpacity=".45"
      />
      <path
        d="m192 222 10 104m6 70 5 44"
        stroke="#fff"
        strokeOpacity=".85"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="m405 232-6 70"
        stroke="#fff"
        strokeOpacity=".5"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="m262 256 190-96"
        stroke="#b08e57"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <g transform="translate(398 188) rotate(22) scale(.55)">
        <Olive />
      </g>
    </svg>
  );
}
