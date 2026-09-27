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
      className={`group inline-flex min-h-13 items-center justify-between gap-8 rounded-full border px-7 py-3 text-sm font-bold transition-colors ${light ? "border-albariza bg-albariza text-olive hover:bg-transparent hover:text-albariza" : "border-olive bg-olive text-albariza hover:bg-transparent hover:text-olive"}`}
    >
      {children}
      <ArrowIcon className="size-5 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
