import { JustifyProps, AlignProps, GapProps } from "./types";

export const justifyMetrics: Record<keyof JustifyProps, string> = {
  between: "justify-between",
  evenly: "justify-evenly",
  around: "justify-around",
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  stretch: "justify-stretch"
};

export const alignMetrics: Record<keyof AlignProps, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch"
}

export const gapMetrics: Record<keyof GapProps, string> = {
  none: "",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-8",
  xl: "gap-14"
}