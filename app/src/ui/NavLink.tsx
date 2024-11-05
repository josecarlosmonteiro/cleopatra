import Link from "next/link";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  href: string | URL;
};

export function NavLink({ href, className, children }: Props) {
  return (
    <Link
      href={href}
      className={`
        ${className}
        border-b border-b-transparent
        hover:border-b-white hover:pb-1
        duration-200
      `}
    >
      {children}
    </Link>
  )
}