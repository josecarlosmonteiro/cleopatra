import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLHeadingElement>;

export function BrandTitle(props: Props) {
  return (
    <h1 {...props} className="text-8xl font-['Papyrus']" />
  )
}