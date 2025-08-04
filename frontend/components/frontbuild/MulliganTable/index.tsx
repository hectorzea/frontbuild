"use client";
import { useGetMulliganCardsQuery } from "@/lib/features/tasks/hearthstoneApiSlice";
import { DataTable } from "../DataTable";
import { mulliganColumns } from "../DataTable/Columns";

export function MulliganTable() {
  const { data } = useGetMulliganCardsQuery();
  if (!data) {
    return undefined;
  }
  return (
    <>
      <p>Mulligan winrate</p>
      <p>Partidas ganadas por carta individual</p>
      <DataTable
        data={data}
        columns={mulliganColumns}
        data-testid={"mulligan-cards-table"}
      />
    </>
  );
}
