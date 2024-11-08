import { HTMLAttributes } from "react";
import { AlignProps, GapProps, JustifyProps } from "./types";
import { alignMetrics, gapMetrics, justifyMetrics } from "./metrics";

interface Props extends HTMLAttributes<HTMLDivElement> {
  col?: boolean;
  justify?: keyof JustifyProps;
  align?: keyof AlignProps;
  gap?: keyof GapProps;
}

export function Flex({ className, col, justify = 'start', align = 'stretch', gap = 'none', ...rest }: Props) {
  const justifyStyle = justifyMetrics[justify];
  const alignStyle = alignMetrics[align];
  const gapStyle = gapMetrics[gap];

  return (
    <div
      className={`flex ${col && 'flex-col'} ${justifyStyle} ${alignStyle} ${gapStyle} ${className}`}
      {...rest}
    />
  )
}