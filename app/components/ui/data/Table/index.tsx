import { TBody } from "./TBody";
import { THead } from "./THead";
import { ColumnProps } from "./types"

type Props<T> = {
  columns: ColumnProps<T>[];
  data: T[];
}

export function Table<T>({ columns, data }: Props<T>) {
  return (
    <div className="w-full overflow-auto">
      <table className="w-full">
        <THead columns={columns} />
        <TBody columns={columns} data={data} />
      </table>
    </div>
  )
}