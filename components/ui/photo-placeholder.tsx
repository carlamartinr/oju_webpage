import { Sun, Wave } from "./icons";

export function PhotoPlaceholder({
  label,
  kind = "place",
}: {
  label: string;
  kind?: "place" | "people";
}) {
  return (
    <div className="relative flex min-h-80 flex-col items-center justify-center overflow-hidden rounded-t-[45%] border border-olive/15 bg-paper p-8 md:min-h-110">
      <Sun className="mb-6 size-14 text-sea" />
      <span className="font-display text-7xl tracking-tight text-olive/20">
        Ojú
      </span>
      <Wave className="mt-5 h-6 w-28 text-sea/60" />
      <p className="absolute bottom-7 text-center text-xs text-olive/70">
        {label}
      </p>
      <span className="sr-only">
        {kind === "people"
          ? "Pendiente de fotografía de las fundadoras"
          : "Pendiente de fotografía del local"}
      </span>
    </div>
  );
}
