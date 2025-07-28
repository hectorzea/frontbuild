"use client";
import { useGetMulliganCardsQuery } from "@/lib/features/tasks/hearthstoneApiSlice";
import { DataTable } from "../DataTable";

export function MulliganTable() {
  const { data } = useGetMulliganCardsQuery();
  console.log(data);
  return (
    <div className="flex flex-col w-8/12">
      <p>Mulligan winrate</p>
      <p>filtros</p>
      <DataTable data={[]} columns={[]} data-testid={"mulligan-cards-table"} />
    </div>
  );
}
