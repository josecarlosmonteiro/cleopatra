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
        border-b-2 border-b-white
        duration-200
      `}
    >
      {children}
    </Link>
  )
}