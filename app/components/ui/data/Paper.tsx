import { ReactNode } from "react"

type Props = {
  children: ReactNode;
}

export function Paper({ children }: Props) {
  return (
    <div className="p-4 rounded-lg bg-dark-medium">
      {children}
    </div>
  )
}