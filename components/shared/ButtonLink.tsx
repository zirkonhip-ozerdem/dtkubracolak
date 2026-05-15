import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

const variants = {
  primary: "bg-[#c9a36d] text-white hover:bg-[#b28e5a]",
  secondary: "bg-[#252525] text-white hover:bg-[#111111]",
  light: "bg-white text-[#252525] hover:bg-[#f5efe7]",
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center px-5 text-xs font-bold uppercase tracking-[0.12em] transition ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
