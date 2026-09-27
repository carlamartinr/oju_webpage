import { useId } from "react";

/** Unique, URL-safe ids for gradients: illustrations repeat on the same page. */
export function useSvgIds() {
  const id = useId().replace(/[^\w-]/g, "");
  return (name: string) => `${id}-${name}`;
}

const oliveTones = {
  // Manzanilla: bright, yellowish green.
  bright: ["#d3d26a", "#9aa436", "#5f6b22", "#3c4515"],
  // Partida aliñada: duller, khaki after curing with herbs.
  muted: ["#bfb266", "#857d33", "#544c1d", "#35300f"],
};

/** Shared editorial ingredients. Light comes from the top left; coordinates are centred. */
export function Olive({
  small = false,
  tone = "bright",
  cracked = false,
}: {
  small?: boolean;
  tone?: keyof typeof oliveTones;
  cracked?: boolean;
}) {
  const ids = useSvgIds();
  const [light, mid, dark, deep] = oliveTones[tone];
  return (
    <g transform={small ? "scale(.72)" : undefined} fill="none">
      <defs>
        <radialGradient id={ids("body")} cx=".36" cy=".3" r=".78">
          <stop offset="0" stopColor={light} />
          <stop offset=".42" stopColor={mid} />
          <stop offset=".86" stopColor={dark} />
          <stop offset="1" stopColor={deep} />
        </radialGradient>
        <radialGradient id={ids("shine")} cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#fffbe6" stopOpacity=".95" />
          <stop offset="1" stopColor="#fffbe6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        d="M-53-3C-53-30-27-45 4-44 35-43 55-25 54 1 53 28 28 45-2 45-32 45-53 26-53-3Z"
        fill={`url(#${ids("body")})`}
      />
      <path
        d="M-41 27C-24 43 18 45 40 25"
        stroke={light}
        strokeOpacity=".35"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <g fill={light} opacity=".45">
        <circle cx="-10" cy="10" r="1.6" />
        <circle cx="14" cy="-4" r="1.3" />
        <circle cx="22" cy="18" r="1.5" />
        <circle cx="-26" cy="8" r="1.2" />
        <circle cx="2" cy="28" r="1.3" />
      </g>
      {cracked && (
        <g strokeLinecap="round" fill="none">
          <path
            d="M-6-42C0-24-9-8-1 8 5 21-1 32 3 44"
            stroke="#d8cc92"
            strokeWidth="4"
            opacity=".55"
          />
          <path
            d="M-8-42C-2-24-11-8-3 8 3 21-3 32 1 44"
            stroke={deep}
            strokeOpacity=".8"
            strokeWidth="2"
          />
        </g>
      )}
      <ellipse cx="41" cy="-5" rx="7" ry="9" fill={deep} opacity=".75" />
      <ellipse cx="39" cy="-7" rx="3" ry="4" fill={light} opacity=".3" />
      <ellipse
        cx="-22"
        cy="-24"
        rx="17"
        ry="9"
        transform="rotate(-28 -22 -24)"
        fill={`url(#${ids("shine")})`}
      />
      <ellipse
        cx="-25"
        cy="-25"
        rx="5"
        ry="2.6"
        transform="rotate(-28 -25 -25)"
        fill="#fffdf2"
      />
    </g>
  );
}

export function Pepper() {
  const ids = useSvgIds();
  return (
    <g fill="none">
      <defs>
        <linearGradient id={ids("body")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e6dc70" />
          <stop offset=".45" stopColor="#bfb536" />
          <stop offset="1" stopColor="#7f7c1d" />
        </linearGradient>
      </defs>
      <path
        d="M-101 35C-111 9-90-16-59-25-21-37 11-17 47-27 66-32 76-42 79-56 82-66 91-61 92-49 99-13 62 8 23 13-11 17-56 4-79 25-91 37-96 46-101 35Z"
        fill={`url(#${ids("body")})`}
      />
      <path
        d="M-78 6C-58-6-40-4-22-2M-6 2C14 0 30-4 46-10M58-20C64-26 70-32 74-40"
        stroke="#7a7619"
        strokeOpacity=".4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M-62-19C-33-30-8-16 18-20 38-23 56-30 70-44"
        fill="none"
        stroke="#fbf7cf"
        strokeOpacity=".85"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M-88 3C-80-6-70-11-62-13"
        fill="none"
        stroke="#fbf7cf"
        strokeOpacity=".6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M-80 26C-50 2-12 22 26 10 42 6 54 4 65-3"
        fill="none"
        stroke="#5f6116"
        strokeOpacity=".6"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M-100 34L-106 45"
        stroke="#5c6a24"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>
  );
}

const fillets = {
  // Anchoa en aceite: cured reddish-brown flesh with dark silver skin.
  anchovy: {
    flesh: ["#b27351", "#8a4a30", "#5e2e1d"],
    skin: "#6b4232",
    line: "#c99a7c",
  },
  // Boquerón en vinagre: white flesh with bright silver-blue skin.
  boqueron: {
    flesh: ["#fbf8ef", "#e6e1d2", "#bdb7a4"],
    skin: "#a9b6bc",
    line: "#5c6d78",
  },
};

export function Anchovy({ white = false }: { white?: boolean }) {
  const ids = useSvgIds();
  const fish = fillets[white ? "boqueron" : "anchovy"];
  return (
    <g fill="none">
      <defs>
        <linearGradient id={ids("flesh")} x1="0" y1="0" x2=".3" y2="1">
          <stop offset="0" stopColor={fish.flesh[0]} />
          <stop offset=".55" stopColor={fish.flesh[1]} />
          <stop offset="1" stopColor={fish.flesh[2]} />
        </linearGradient>
      </defs>
      <path
        d="M-73 26C-94 8-78-9-46-17L41-42C78-52 99-34 87-11 73 13 36 19 0 22-34 24-52 31-43 40-33 48-9 38 2 34 14 30 20 33 11 41-14 62-50 64-62 46-79 28-53 13-18 6 9 1 59-4 66-20 73-33 46-28 32-24L-43 2C-55 6-60 13-52 19Z"
        fill={`url(#${ids("flesh")})`}
      />
      <path
        d="M-68 17C-76 2-52-4-31-10L41-33C61-40 79-35 76-25 69-5 30-2-4 5-33 11-60 21-54 36"
        fill="none"
        stroke={fish.skin}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M-63 15C-68 5-48-1-30-6L40-28C57-34 71-31 70-25"
        fill="none"
        stroke={fish.line}
        strokeOpacity=".6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M-48 44C-35 53-7 40 9 37M-66 12C-47-1 18-13 48-26"
        fill="none"
        stroke={fish.flesh[2]}
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".7"
      />
      <path
        d="M-49-9L20-31M43-37L62-39M-40 49C-26 53-12 47 0 42"
        fill="none"
        stroke="#fffdf4"
        strokeOpacity=".8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>
  );
}

export function RedPepper() {
  const ids = useSvgIds();
  return (
    <g fill="none">
      <defs>
        <linearGradient id={ids("body")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d9573a" />
          <stop offset=".5" stopColor="#b13a24" />
          <stop offset="1" stopColor="#7a2114" />
        </linearGradient>
      </defs>
      <path
        d="M-70 7C-35-18 4-24 38-10 65 1 45 25 9 27L-26 22C-6 13 14 12 24 6 3-3-30 6-53 19Z"
        fill={`url(#${ids("body")})`}
      />
      <path
        d="M-52 3C-22-11 2-15 27-7"
        fill="none"
        stroke="#ffd9c4"
        strokeOpacity=".8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>
  );
}

/** Lemon slice seen from above; squash vertically for perspective. */
export function LemonSlice() {
  const ids = useSvgIds();
  return (
    <g fill="none">
      <defs>
        <radialGradient id={ids("flesh")} cx=".42" cy=".4" r=".62">
          <stop offset="0" stopColor="#fff2a8" />
          <stop offset=".7" stopColor="#f1d24f" />
          <stop offset="1" stopColor="#dcae25" />
        </radialGradient>
      </defs>
      <circle r="44" fill="#d9a41c" />
      <circle r="40" fill="#ecc233" />
      <circle r="35" fill="#f8f1cf" />
      <circle r="31" fill={`url(#${ids("flesh")})`} />
      <g stroke="#f8f1cf" strokeWidth="2.5" strokeLinecap="round">
        {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle) => (
          <path key={angle} d="M0-3V-30" transform={`rotate(${angle})`} />
        ))}
      </g>
      <circle r="4" fill="#f8f1cf" />
      <path
        d="M-30-16A34 34 0 0 1-12-32"
        stroke="#fffbe8"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  );
}

export function Thyme() {
  return (
    <g fill="none">
      <path
        d="M-48 18C-20 6 10-4 50-18"
        stroke="#6b5f33"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {[-38, -24, -10, 4, 18, 32].map((x, index) => (
        <g key={x} transform={`translate(${x} ${14 - (x + 48) * 0.34})`}>
          <ellipse
            cx="-2"
            cy={index % 2 ? 6 : -6}
            rx="6"
            ry="3"
            transform={`rotate(${index % 2 ? 35 : -35})`}
            fill={index % 2 ? "#5d6f34" : "#788a45"}
          />
          <ellipse
            cx="3"
            cy={index % 2 ? -5 : 5}
            rx="5"
            ry="2.6"
            transform={`rotate(${index % 2 ? -30 : 30})`}
            fill={index % 2 ? "#788a45" : "#5d6f34"}
          />
        </g>
      ))}
    </g>
  );
}

export function GarlicClove() {
  const ids = useSvgIds();
  return (
    <g fill="none">
      <defs>
        <linearGradient id={ids("body")} x1="0" y1="0" x2="1" y2=".4">
          <stop offset="0" stopColor="#fffaf0" />
          <stop offset=".6" stopColor="#ece1c4" />
          <stop offset="1" stopColor="#c7b68e" />
        </linearGradient>
      </defs>
      <path
        d="M-24 14C-30-2-16-20 2-26L12-30 10-22C24-12 26 6 18 16 6 26-16 26-24 14Z"
        fill={`url(#${ids("body")})`}
      />
      <path
        d="M-18 13C-14 20 2 22 12 15"
        stroke="#b58e98"
        strokeOpacity=".6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M-16 0C-14-10-6-18 2-21"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>
  );
}

/** Short strip of roasted pepper, for seasonings. */
export function PepperStrip() {
  const ids = useSvgIds();
  return (
    <g fill="none">
      <defs>
        <linearGradient id={ids("body")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dc5b3c" />
          <stop offset="1" stopColor="#8a2616" />
        </linearGradient>
      </defs>
      <path
        d="M-30-4C-12-12 12-12 30-6 34-2 32 4 28 5 10 1-10 2-27 8-33 8-35 0-30-4Z"
        fill={`url(#${ids("body")})`}
      />
      <path
        d="M-24-5C-10-10 8-10 22-7"
        stroke="#ffd4bf"
        strokeOpacity=".75"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
  );
}
