import { Flex } from "@/app/components/ui/align/Flex";
import { Paper } from "@/app/components/ui/data/Paper";
import { currency } from "@/app/utils/formats";

export default function MonthlyPlannerPage() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-8 text-xl">
        <Flex col gap="md">
          <Paper>
            <Flex col gap="md">
              <Flex className="text-revenue" justify="between">
                <div>Receitas</div>
                <div>{currency(2000)}</div>
              </Flex>

              <Flex className="text-expense" justify="between">
                <div>Despesas</div>
                <div>{currency(1550)}</div>
              </Flex>
            </Flex>
          </Paper>

          <div className="p-4 rounded-lg bg-dark-medium">
            table...
          </div>
        </Flex>
      </div>
    </div>
  )
}