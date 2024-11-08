import { currency } from "@/app/utils/formats";

export default function MonthlyPlannerPage() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-8 text-xl">
        <div className="p-4 rounded-lg bg-black bg-opacity-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between font-medium text-green-500">
              <div>Receitas</div>
              <div>{currency(2000)}</div>
            </div>

            <div className="flex items-center justify-between font-medium text-red-500">
              <div>Despesas</div>
              <div>{currency(1350)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}