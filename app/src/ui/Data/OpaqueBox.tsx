import { ReactNode } from "react";

export function OpaqueBox({ children }: { children: ReactNode }) {
  return (
    <div className="p-4 rounded-lg bg-black bg-opacity-20 shadow-lg">
      {children}
    </div>
  )
}