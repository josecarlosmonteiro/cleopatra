import { HTMLAttributes } from "react";
import { justifyStyles, JustifyProps, AlignProps, alignStyles } from "./alignValues";

interface Props extends HTMLAttributes<HTMLDivElement> {
  justify?: keyof JustifyProps;
  align?: keyof AlignProps;
};

export function Flex({ className, justify = 'start', align = 'start', ...rest }: Props) {
  return (
    <div
      {...rest}
      className={`
        flex
        ${justifyStyles[justify]}
        ${alignStyles[align]}
        ${className}
      `}
    />
  )
}