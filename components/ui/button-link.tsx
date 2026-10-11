import Link from "next/link";
import { ArrowIcon } from "./icons";

export function ButtonLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 items-center gap-3 border px-5 py-2.5 text-sm font-semibold transition-colors ${light ? "border-albariza/60 text-albariza hover:border-albariza hover:bg-albariza hover:text-olive" : "border-olive/60 text-olive hover:border-olive hover:bg-olive hover:text-albariza"}`}
    >
      {children}
      <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
