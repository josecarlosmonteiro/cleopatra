export type ColumnProps<T> = {
  accessKey: keyof T;
  header?: string;
}