import {
  ColumnDef,
  createSortedRowModel,
  sortFn_text,
  stockFeatures,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import { Task } from "@/app/(tasks)/schemas";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowDown, ArrowUp, ChevronsUpDown, EyeOff } from "lucide-react";
import { capitalizeFirstLetter, cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge, BadgeVariant } from "@/components/ui/badge";

const features = tableFeatures({
  //todas las funcionalidades de table
  ...stockFeatures,
  //esenciales para sorting
  sortedRowModel: createSortedRowModel(),
  sortFns: {
    text: sortFn_text,
  },
});

const columns: Array<ColumnDef<typeof features, Task>> = [
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
        className="translate-y-0.5"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-0.5"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <div className={cn("flex items-center space-x-2")}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="-ml-3 h-8 data-[state=open]:bg-accent"
            >
              <span>Title</span>
              {column.getIsSorted() === "desc" ? (
                <ArrowDown />
              ) : column.getIsSorted() === "asc" ? (
                <ArrowUp />
              ) : (
                <ChevronsUpDown />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => column.toggleSorting()}>
              <ArrowUp className="h-3.5 w-3.5 text-muted-foreground/70" />
              Asc
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => column.toggleSorting()}>
              <ArrowDown className="h-3.5 w-3.5 text-muted-foreground/70" />
              Desc
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
              <EyeOff className="h-3.5 w-3.5 text-muted-foreground/70" />
              Hide
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
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
          <span className="max-w-125 truncate text-xs sm:text-sm">
            {row.getValue("title")}
          </span>
        </div>
      );
    },
  },
  //todo finalizar
  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => info.getValue(),
  },
  // todo finalizar
  {
    accessorKey: "priority",
    header: "Priority",
    cell: (info) => info.getValue(),
  },
];

interface TasksTableProps {
  tasks: Array<Task>;
}

const TasksTable = ({ tasks }: TasksTableProps) => {
  const table = useTable({
    features,
    columns,
    data: tasks,
  });
  return (
    <div className="rounded-md border">
      <Table data-testid={"tasks-table"}>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} colSpan={header.colSpan}>
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
                  <TableCell key={cell.id}>
                    <table.FlexRender cell={cell} />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TasksTable;
