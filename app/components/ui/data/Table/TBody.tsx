import { ColumnProps } from "./types"

type Props<T> = {
  columns: ColumnProps<T>[];
  data: T[];
}

export function TBody<T>({ columns, data }: Props<T>) {
  return (
    <tbody>
      {
        data.map((row, rowIndex) => (
          <tr key={rowIndex} className="text-center">
            {
              columns.map((cell, cellIndex) => (
                <td key={`${cell.accessKey.toString()}_${cellIndex}`}>
                  {row[cell.accessKey] as string}
                </td>
              ))
            }
          </tr>
        ))
      }
    </tbody>
  )
}