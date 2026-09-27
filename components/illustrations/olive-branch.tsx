const leafShape = "M0 0C18-15 66-17 110 0 66 17 18 15 0 0Z";
const veins =
  "M6 0H102M24 0l12-8M44 0l12-9M64 0l11-8M84 0l9-6M30 0l12 8M50 0l12 9M70 0l11 8";

type Leaf = { t: number; angle: number; scale: number; outline?: boolean };

// Leaves along the twig: position (0-1), angle from the twig, size and print style.
const leaves: Leaf[] = [
  { t: 0.12, angle: -48, scale: 0.8, outline: true },
  { t: 0.2, angle: 44, scale: 0.9 },
  { t: 0.32, angle: -40, scale: 1 },
  { t: 0.42, angle: 50, scale: 1, outline: true },
  { t: 0.54, angle: -44, scale: 1.05 },
  { t: 0.64, angle: 38, scale: 0.95 },
  { t: 0.75, angle: -34, scale: 0.9, outline: true },
  { t: 0.86, angle: 30, scale: 0.85 },
];

// Cubic twig from (40 380) to (330 40).
const twig = [
  [40, 380],
  [60, 260],
  [230, 250],
  [330, 40],
];
function pointAt(t: number) {
  const u = 1 - t;
  const weights = [u ** 3, 3 * u ** 2 * t, 3 * u * t ** 2, t ** 3];
  const slopes = [
    -3 * u ** 2,
    3 * u ** 2 - 6 * u * t,
    6 * u * t - 3 * t ** 2,
    3 * t ** 2,
  ];
  const sum = (values: number[], axis: number) =>
    values.reduce(
      (total, value, index) => total + value * twig[index][axis],
      0,
    );
  return {
    x: sum(weights, 0),
    y: sum(weights, 1),
    angle: (Math.atan2(sum(slopes, 1), sum(slopes, 0)) * 180) / Math.PI,
  };
}

/**
 * Tone-on-tone olive sprig for background prints, like the brand packaging.
 * Colour comes from `currentColor`; vein cut-outs use `--leaf-cut`.
 */
export function OliveSprig({ className }: { className?: string }) {
  const end = pointAt(1);
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      data-branch
      className={className}
    >
      <path
        d="M40 380C60 260 230 250 330 40"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {[...leaves, { t: 1, angle: 0, scale: 1 }].map(
        ({ t, angle, scale, outline }) => {
          const point = t === 1 ? end : pointAt(t);
          return (
            <g
              key={t}
              transform={`translate(${point.x} ${point.y}) rotate(${point.angle + angle}) scale(${scale})`}
            >
              {outline ? (
                <>
                  <path d={leafShape} stroke="currentColor" strokeWidth="2" />
                  <path d={veins} stroke="currentColor" strokeWidth="1.2" />
                </>
              ) : (
                <>
                  <path d={leafShape} fill="currentColor" />
                  <path
                    d={veins}
                    stroke="var(--leaf-cut, #ede7d9)"
                    strokeWidth="1.4"
                  />
                </>
              )}
            </g>
          );
        },
      )}
      <g fill="currentColor">
        <ellipse
          cx="206"
          cy="250"
          rx="13"
          ry="17"
          transform="rotate(-30 206 250)"
        />
        <ellipse
          cx="228"
          cy="266"
          rx="11"
          ry="15"
          transform="rotate(-50 228 266)"
        />
      </g>
    </svg>
  );
}
