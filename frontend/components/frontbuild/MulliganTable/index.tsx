"use client";
import { useGetMulliganCardsQuery } from "@/lib/features/tasks/hearthstoneApiSlice";
import { DataTable } from "../DataTable";
import { mulliganColumns } from "../DataTable/Columns";

export function MulliganTable() {
  const { data } = useGetMulliganCardsQuery({
    classId: "DEATHKNIGHT",
    type: "initial",
  });
  if (!data) {
    return undefined;
  }
  return (
    <>
      <p>Mulligan winrate</p>
      <p>Partidas ganadas por carta individual</p>
      <DataTable
        data={data}
        toolbarEnabled={false}
        columns={mulliganColumns}
        data-testid={"mulligan-cards-table"}
      />
    </>
  );
}
