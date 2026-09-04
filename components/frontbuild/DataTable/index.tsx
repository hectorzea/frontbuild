"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  // VisibilityState,
  tableFeatures,
  useTable,
  // Features individuales para tree-shaking
  columnVisibilityFeature,
  columnFilteringFeature,
  columnFacetingFeature,
  rowSortingFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  // Factorías de row models
  createFilteredRowModel,
  createSortedRowModel,
  createPaginatedRowModel,
  createFacetedRowModel,
  createFacetedUniqueValues,
  filterFn_includesString,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTableToolbar } from "./DataTableToolbar";
import { DataTablePagination } from "./DataTablePagination";
import { ColumnMeta } from "./Columns";

// Definir features fuera del componente para que no se recreen y tipar correctamente
export const features = tableFeatures({
  columnVisibilityFeature,
  columnFilteringFeature,
  columnFacetingFeature,
  rowSortingFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  filterFns: { includesString: filterFn_includesString },
  filteredRowModel: createFilteredRowModel(),
  sortedRowModel: createSortedRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  facetedRowModel: createFacetedRowModel(),
  facetedUniqueValues: createFacetedUniqueValues(),
});

export type AppTableFeatures = typeof features;

interface DataTableProps<TData extends Record<string, any>> {
  columns: ColumnDef<AppTableFeatures, TData, any>[];
  data: TData[];
  toolbarEnabled?: boolean;
  testId?: string;
}

export function DataTable<TData extends Record<string, any>, TValue>({
  columns,
  data,
  testId,
  toolbarEnabled = true,
}: DataTableProps<TData>) {
  const [rowSelection, setRowSelection] = React.useState({});
  // const [columnVisibility, setColumnVisibility] =
  //   React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useTable({
    data,
    columns,
    features,
    state: {
      sorting,
      // columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    // onColumnVisibilityChange: setColumnVisibility,
  });

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} toolbarEnabled={toolbarEnabled} />
      <div className="rounded-md border">
        <Table data-testid={testId}>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      className={
                        (header.column.columnDef.meta as ColumnMeta)
                          ?.columnClasses
                      }
                    >
                      {header.isPlaceholder ? null : (
                        <table.FlexRender header={header} />
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={
                        (cell.column.columnDef.meta as ColumnMeta)
                          ?.columnClasses
                      }
                    >
                      <table.FlexRender cell={cell} />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
