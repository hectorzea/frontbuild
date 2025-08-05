"use client";
import { useGetMulliganCardsQuery } from "@/lib/features/tasks/hearthstoneApiSlice";
import { DataTable } from "../DataTable";
import { mulliganColumns } from "../DataTable/Columns";

export function MulliganTable() {
  const { data: initialCards } = useGetMulliganCardsQuery({
    classId: "DEATHKNIGHT",
    type: "initial",
  });

  const { data: discardedCards } = useGetMulliganCardsQuery({
    classId: "DEATHKNIGHT",
    type: "discarded",
  });
  if (!initialCards || !discardedCards) {
    return undefined;
  }
  return (
    <>
      <div>
        <p className="text-xl">MULLIGAN WINRATE STATS</p>
        <p className="mt-3">Partidas ganadas por carta individual (INICIAL)</p>
        <DataTable
          data={initialCards}
          toolbarEnabled={false}
          columns={mulliganColumns}
          data-testid={"mulligan-cards-table"}
        />
      </div>
      <div className="mt-5">
        <p>Partidas ganadas por carta individual (DESCARTADAS / MULLIGAN)</p>
        <DataTable
          data={discardedCards}
          toolbarEnabled={false}
          columns={mulliganColumns}
          data-testid={"mulligan-cards-table"}
        />
      </div>
    </>
  );
}
