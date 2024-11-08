export type AlignProps = {
  start: string;
  center: string;
  end: string;
  stretch: string;
}

export interface JustifyProps extends AlignProps {
  between: string;
  evenly: string;
  around: string;
}

export type GapProps = {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}