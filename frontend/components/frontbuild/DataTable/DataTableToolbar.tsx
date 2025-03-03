"use client"

import { Table } from "@tanstack/react-table"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "./DataTableViewOptions"
import { DataTableFacetedFilter } from "./DataTableFacetedFilter"
import { useState } from "react"
import { TaskDialog } from "@/components/frontbuild/TaskDialog"
import { useAppSelector } from "@/lib/hooks"
import { selectPriorities, selectStatuses } from "@/lib/features/app/appSlice"

interface DataTableToolbarProps<TData> {
    table: Table<TData>
}

export function DataTableToolbar<TData>({
    table,
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
    const priorities = useAppSelector(selectPriorities);
    const statuses = useAppSelector(selectStatuses);

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                <Input
                    placeholder="Filter tasks..."
                    value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("title")?.setFilterValue(event.target.value)
                    }
                    className="h-8 w-[150px] lg:w-[250px]"
                />
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
            </div>
            <Button size={'sm'} data-testid={'add-task-button'} className="mr-5" onClick={() => setIsDialogOpen(true)}>Add Task</Button>
            <TaskDialog mode={"add"} open={isDialogOpen} onOpenChange={setIsDialogOpen} task={{ _id: '', title: '', label: '', priority: '', status: '' }} />
            <DataTableViewOptions table={table} />
        </div>
    )
}