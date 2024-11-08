import { RevenuesListProps } from "@/app/components/MonthlyPlanner/types";
import { ColumnProps } from "@/app/components/ui/data/Table/types";

export const columns: ColumnProps<RevenuesListProps>[] = [
  { accessKey: 'title', header: 'Lançamento' },
  { accessKey: 'category', header: 'Categoria' },
  { accessKey: 'value', header: 'Valor ($)' },
];

export const data: RevenuesListProps[] = [
  { title: 'Salário', category: 'salário', value: 1500 },
  { title: 'Venda de bolos', category: 'renda extra', value: 200 },
  { title: 'Manutenção em geral', category: 'renda extra', value: 300 },
];