"use client";

import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { taskSchema } from "@/app/schemas";
import { useState } from "react";
import { ConfirmationDialog } from "@/components/frontbuild/ConfirmationDialog";
import { toast } from "sonner";
import { removeTask } from "@/lib/features/tasks/tasksSlice";
import { useDispatch } from "react-redux";
import { selectLabels } from "@/lib/features/app/appSlice";
import { useAppSelector } from "@/lib/hooks";
import { deleteTaskApi } from "@/lib/features/tasks/api";
import Link from "next/link";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const task = taskSchema.parse(row.original);
  const dispatch = useDispatch();
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] =
    useState<boolean>(false);
  const labels = useAppSelector(selectLabels);

  const onDeleteTask = async () => {
    try {
      await deleteTaskApi(task._id!);
      setConfirmationDialogOpen(false);
      dispatch(removeTask(task._id!));
      toast("Task deleted");
    } catch (error) {
      setConfirmationDialogOpen(false);
      toast("Error on deleting task");
      console.error(error);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <MoreHorizontal />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          {/* TODO mejorar esto a rutas paralelas */}
          <Link href={`/projects/tasks/edit/${task._id}`}>Edit Task</Link>
          {/* <DropdownMenuItem>
            <Link href={`/tasks/edit/${task._id}`}>Edit Task</Link>
          </DropdownMenuItem> */}
          <DropdownMenuItem>Make a copy</DropdownMenuItem>
          <DropdownMenuItem>Favorite</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup value={task.label}>
                {labels?.map((label) => (
                  <DropdownMenuRadioItem key={label.value} value={label.value}>
                    {label.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setConfirmationDialogOpen(true)}>
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ConfirmationDialog
        open={isConfirmationDialogOpen}
        onOpenChange={setConfirmationDialogOpen}
        onAccept={onDeleteTask}
      />
    </>
  );
}
