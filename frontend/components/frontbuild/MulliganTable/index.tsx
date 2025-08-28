"use client";
import { useGetMulliganCardsMatchResultQuery } from "@/lib/features/tasks/hearthstoneApiSlice";
import { DataTable } from "../DataTable";
import { mulliganColumns } from "../DataTable/Columns";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useMsw } from "@/hooks/useMsw";

export function MulliganTable() {
  const mswLoaded = useMsw();
  console.log(`MSW on Mulligan Table API with mswLoaded in ${mswLoaded}`);
  const { data: initialCards } = useGetMulliganCardsMatchResultQuery(
    {
      classId: "DEATHKNIGHT",
      type: "initial",
    },
    { skip: !mswLoaded }
  );

  const { data: discardedCards } = useGetMulliganCardsMatchResultQuery(
    {
      classId: "DEATHKNIGHT",
      type: "discarded",
    },
    { skip: !mswLoaded }
  );
  if (!initialCards || !discardedCards) {
    return undefined;
  }
  return (
    <div>
      <p className="text-xl" data-testid="mulligan-table-title">
        MULLIGAN WINRATE STATS
      </p>
      <Button
        asChild
        size={"lg"}
        data-testid={"add-new-match-mulligan"}
        className="my-3"
      >
        <Link href={"/projects/hs-card-search/mulligan/new-match"}>
          Add new match
        </Link>
      </Button>
      <div>
        <p className="mt-3">Partidas ganadas por carta individual (INICIAL)</p>
        <DataTable
          data={initialCards}
          toolbarEnabled={false}
          columns={mulliganColumns}
          testId={"mulligan-winrate-initial-cards-table"}
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
          testId={"mulligan-winrate-discard-cards-table"}
        />
      </div>
    </div>
  );
}
