import { Olive } from "./ingredients";

export function Vermouth({
  className,
  decorative = false,
}: {
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
        decorative ? undefined : "Ilustración de vermú con naranja y aceituna"
      }
    >
      <path
        d="M176 203 199 463Q300 511 401 463L424 203Z"
        fill="#c4c4a5"
        fillOpacity=".3"
        stroke="#748b86"
        strokeWidth="3"
      />
      <path d="m186 278 20 175q94 43 189 0l19-175Z" fill="#9c482c" />
      <ellipse cx="300" cy="279" rx="113" ry="34" fill="#bc6637" />
      <path
        d="m217 332 9 99M247 354l4 93M282 348l2 106M318 352l-2 102M353 350l-5 99M385 330l-11 108"
        stroke="#da9961"
        strokeWidth="7"
        strokeLinecap="round"
        opacity=".65"
      />
      <path d="M231 270 275 252 305 287 262 309Z" fill="#d7bd86" />
      <path d="m279 314 54-26 29 35-48 31Z" fill="#d6b684" />
      <path
        d="m239 270 33-10 20 22M293 315l37-18 21 26"
        stroke="#f1dfb2"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M287 214C250 137 319 98 364 124 407 148 391 196 379 225Z"
        fill="#c87932"
      />
      <path
        d="M300 209C270 147 321 116 354 135 389 156 379 187 370 211Z"
        fill="#e4ad50"
      />
      <path
        d="m329 175-26-26m27 27 13-39m-11 40 42-12m-43 14 37 23m-39-24-19 29"
        stroke="#f1d195"
        strokeWidth="3"
      />
      <path
        d="M179 206C192 250 408 251 422 207M207 465Q302 506 396 465"
        stroke="#7e958e"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="m190 210 8 73m9 151 3 22"
        stroke="#f5f1e8"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="m278 240 169-84"
        stroke="#b49460"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <g transform="translate(391 184) rotate(22) scale(.55)">
        <Olive />
      </g>
    </svg>
  );
}
