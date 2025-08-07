"use client";
import { useGetMulliganCardsMatchResultQuery } from "@/lib/features/tasks/hearthstoneApiSlice";
import { DataTable } from "../DataTable";
import { mulliganColumns } from "../DataTable/Columns";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MulliganTable() {
  const { data: initialCards } = useGetMulliganCardsMatchResultQuery({
    classId: "DEATHKNIGHT",
    type: "initial",
  });

  const { data: discardedCards } = useGetMulliganCardsMatchResultQuery({
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
        <Button
          asChild
          size={"lg"}
          data-testid={"download-cv-button"}
          className="my-3"
        >
          <Link href={"/projects/hs-card-search/mulligan/new-match"}>
            Add new match
          </Link>
        </Button>
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
