"use client";
import { useGetMulliganCardsQuery } from "@/lib/features/tasks/hearthstoneApiSlice";
import { DataTable } from "../DataTable";
import { mulliganColumns } from "../DataTable/Columns";
import Link from "next/link";

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
      <Link href={"/projects/hs-card-search/mulligan/new-match"}>
        Open modal
      </Link>
      <div>
        <p className="text-xl">MULLIGAN WINRATE STATS</p>
        <p className="my-3">Partidas ganadas por carta individual (INICIAL)</p>
        <Link href={`/projects/hs-card-search/mulligan`}>Modal</Link>
        <DataTable
          data={initialCards}
          toolbarEnabled={false}
          columns={mulliganColumns}
          data-testid={"mulligan-cards-table"}
        />
      </div>
      <div>
        <p className="my-5">
          Partidas ganadas por carta individual (DESCARTADAS / MULLIGAN)
        </p>
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
