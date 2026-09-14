import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";
import { DataTableFacetedFilter } from "../DataTable/DataTableFacetedFilter";
import { priorities, statuses } from "../TaskForm/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X } from "lucide-react";
import { TaskTableFeatures } from "./TasksTable";
import { Task } from "@/app/(tasks)/schemas";

interface TasksToolbarProps {
  table: Table<TaskTableFeatures, Task>;
}
export function TasksToolbar({ table }: TasksToolbarProps) {
  const fullState = table.store.state;
  const isFiltered = fullState.columnFilters.length > 0;
  return (
    <div data-testid={"data-table-toolbar"}>
      <div className="flex flex-col flex-1 items-center sm:flex-row space-x-1 sm:space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-full sm:w-37.5 lg:w-62.5"
        />
        <div className="flex flex-col w-full sm:flex-row sm:w-auto justify-between sm:justify-start space-x-2">
          {table.getColumn("status") && (
            <DataTableFacetedFilter
              column={table.getColumn("status")}
              title="Status"
              options={statuses}
              filterType="status"
            />
          )}
          {table.getColumn("priority") && (
            <DataTableFacetedFilter
              column={table.getColumn("priority")}
              title="Priority"
              filterType="priority"
              options={priorities}
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
          asChild
          size={"sm"}
          className="w-full sm:w-auto mt-2 sm:mt-0"
          data-testid="add-task-link-button"
        >
          <Link href={"/tasks/new"}>New Task</Link>
        </Button>
        {/* <DataTableViewOptions table={table} /> */}
      </div>
    </div>
  );
}
