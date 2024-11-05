export type AlignProps = {
  start: string;
  center: string;
  end: string;
}

export interface JustifyProps extends AlignProps {
  between: string;
}

export const justifyStyles: Record<keyof JustifyProps, string> = {
  start: 'justify-start',
  center: "justify-center",
  end: "justify-end",
  between: "justify-between"
}

export const alignStyles: Record<keyof AlignProps, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end"
}