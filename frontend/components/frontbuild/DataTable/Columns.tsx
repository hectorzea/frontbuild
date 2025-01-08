"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge, BadgeVariant } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { labels, priorities, Priority, Status, statuses } from "../data"
import { Task } from "../schema"
import { DataTableColumnHeader } from "./DataTableColumnHeader"
import { DataTableRowActions } from "./DataTableRowActions"
import { getPriorityIcon, getStatusIcon } from "@/lib/utils"
import { Binary } from "lucide-react"

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  //todo generate task_id
  // {
  //   accessorKey: "_id",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Task" />
  //   ),
  //   cell: ({ row }) => {
  //     console.log(row)
  //     return <div className="w-[95px]">{row.getValue("_id")}</div>
  //   },
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label)
      const badgeVariant: BadgeVariant = label?.value as BadgeVariant

      return (
        <div className="flex space-x-2">
          {label && <Badge variant={badgeVariant}>{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("title")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      )

      const rowStatus = row.original.status as Status

      const Icon = rowStatus ? getStatusIcon(rowStatus) : Binary;

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          <Icon className="mr-2 h-4 w-4 text-muted-foreground" />
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue("priority")
      )

      const rowPriority = row.original.priority as Priority
      const Icon = rowPriority ? getPriorityIcon(rowPriority) : Binary;

      if (!priority) {
        return null
      }

      return (
        <div className="flex items-center">
          <Icon className="mr-2 h-4 w-4 text-muted-foreground" />
          <span>{priority.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]