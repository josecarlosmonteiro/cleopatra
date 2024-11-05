import { OpaqueBox } from "@/app/src/ui/Data/OpaqueBox";
import { currency } from "@/app/utils/formats";

export default function MonthlyPlannerPage() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-8 text-xl">
        <OpaqueBox>
          <div className="flex items-center justify-between text-emerald-400">
            <h2>Receitas</h2>
            <h2>{currency(2000)}</h2>
          </div>
        </OpaqueBox>

        <OpaqueBox>
          <div className="flex items-center justify-between text-red-400">
            <h2>Despesas</h2>
            <h2>{currency(1650)}</h2>
          </div>
        </OpaqueBox>
      </div>
    </div>
  )
}