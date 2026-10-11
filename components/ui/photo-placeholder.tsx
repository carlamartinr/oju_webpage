import { LogoOlives } from "@/components/ui/logo-olives";

export function PhotoPlaceholder({
  label,
  kind = "place",
  className = "aspect-4/5",
}: {
  label: string;
  kind?: "place" | "people";
  className?: string;
}) {
  return (
    <div className={`relative flex w-full ${className} flex-col items-center justify-center overflow-hidden rounded-2xl bg-olive/6 p-8`}>
      <LogoOlives className="size-16 text-olive/25" />
      <p className="absolute inset-x-8 bottom-7 text-center text-xs text-olive/60">
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
