import { Input } from "@/components/ui/input";
import { RowData, Table, TableFeatures } from "@tanstack/react-table";
import { DataTableFacetedFilter } from "../DataTable/DataTableFacetedFilter";
import { priorities, statuses } from "../TaskForm/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DataTableViewOptions } from "../DataTable/DataTableViewOptions";
import { X } from "lucide-react";

interface TasksToolbarProps<
  TFeatures extends TableFeatures,
  TData extends RowData,
> {
  table: Table<TFeatures, TData>;
}
// TODO VER QUE ONDA CON GETFILTERVALUE
export function TasksToolbar<
  TFeatures extends TableFeatures,
  TData extends RowData,
>({ table }: TasksToolbarProps<TFeatures, TData>) {
  return (
    <div data-testid={"data-table-toolbar"}>
      <div className="flex flex-col flex-1 items-center sm:flex-row space-x-1 sm:space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-full sm:w-[150px] lg:w-[250px]"
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
// export default TasksToolbar;
