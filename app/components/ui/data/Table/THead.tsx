import { ColumnProps } from "./types";

type Props<T> = {
  columns: ColumnProps<T>[];
}

export function THead<T>({ columns }: Props<T>) {
  return (
    <thead>
      <tr>
        {
          columns.map((col, index) => (
            <th key={`${col.accessKey.toString()}_${index}`}>
              {col.header}
            </th>
          ))
        }
      </tr>
    </thead>
  )
}