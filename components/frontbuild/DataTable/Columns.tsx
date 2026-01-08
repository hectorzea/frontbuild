"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Badge, BadgeVariant } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Task } from "@/app/(frontbuild)/schemas";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import { DataTableRowActions } from "./DataTableRowActions";
import {
  capitalizeFirstLetter,
  getPriorityIcon,
  getStatusIcon,
} from "@/lib/utils";
import { Binary } from "lucide-react";
import { Priority, Status, CardMatchResult } from "@/app/(frontbuild)/types";

export interface ColumnMeta {
  columnClasses: string;
}

export const mulliganColumns: ColumnDef<CardMatchResult>[] = [
  {
    accessorKey: "cardName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Card Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-xs sm:text-sm">
            {row.getValue("cardName")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "totalGames",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total Games" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-xs sm:text-sm">
            {row.getValue("totalGames")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "wins",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Wins" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-xs sm:text-sm">
            {row.getValue("wins")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "winrate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Win Rate" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-xs sm:text-sm">
            {row.getValue("winrate")}%
          </span>
        </div>
      );
    },
  },
];

//todo ver como mejorar esto para recibir N columnas de T tipos
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
      const badgeVariant: BadgeVariant = row.original.label as BadgeVariant;

      return (
        <div className="flex space-x-2">
          {
            <Badge variant={badgeVariant}>
              {capitalizeFirstLetter(row.original.label)}
            </Badge>
          }
          <span className="max-w-[500px] truncate text-xs sm:text-sm">
            {row.getValue("title")}
          </span>
        </div>
      );
    },
  },
  {
    meta: { columnClasses: "hidden md:table-cell" } as ColumnMeta,
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const rowStatus = row.original.status as Status;

      const Icon = rowStatus ? getStatusIcon(rowStatus) : Binary;

      return (
        <div className="flex w-[100px] items-center">
          <Icon className="mr-2 h-4 w-4 text-muted-foreground" />
          <span className="text-xs sm:text-sm">
            {capitalizeFirstLetter(row.original.status)}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    //todo adjust correct table values for mobile
    meta: { columnClasses: "hidden md:table-cell" } as ColumnMeta,
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      const rowPriority = row.original.priority as Priority;
      const Icon = rowPriority ? getPriorityIcon(rowPriority) : Binary;

      return (
        <div className="flex items-center">
          <Icon className="mr-2 h-4 w-4 text-muted-foreground" />
          <span className="text-xs sm:text-sm">
            {capitalizeFirstLetter(row.original.priority)}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
