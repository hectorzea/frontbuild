"use client";
import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./DataTableViewOptions";
import { DataTableFacetedFilter } from "./DataTableFacetedFilter";
import { useAppSelector } from "@/lib/hooks";
import { selectPriorities, selectStatuses } from "@/lib/features/app/appSlice";
import Link from "next/link";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  toolbarEnabled: boolean;
}

export function DataTableToolbar<TData>({
  table,
  toolbarEnabled,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const priorities = useAppSelector(selectPriorities);
  const statuses = useAppSelector(selectStatuses);

  if (!toolbarEnabled) {
    return null;
  }

  //TODO -> Mejorar
  return (
    <div data-testid={"data-table-toolbar"}>
      <div className="flex flex-col flex-1 items-center sm:flex-row space-x-1 sm:space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[100%] sm:w-[150px] lg:w-[250px]"
        />
        <div className="flex w-full justify-between sm:justify-start space-x-2">
          {table.getColumn("status") && (
            <DataTableFacetedFilter
              column={table.getColumn("status")}
              title="Status"
              options={statuses!}
              filterType="status"
            />
          )}
          {table.getColumn("priority") && (
            <DataTableFacetedFilter
              column={table.getColumn("priority")}
              title="Priority"
              filterType="priority"
              options={priorities!}
            />
          )}
        </div>
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X />
          </Button>
        )}
        <Button
          size={"sm"}
          data-testid={"add-task-button"}
          className="w-full sm:w-auto mt-2 sm:mt-0"
        >
          <Link href={"/projects/tasks/new"}>New Task</Link>
        </Button>
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
