"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useDeleteTaskMutation } from "@/lib/features/tasks/tasksApiSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export interface IAppProps {
  id: string;
}

export function DeleteTaskConfirmation({ id }: IAppProps) {
  const router = useRouter();
  const [deleteTask, { isError, isSuccess }] = useDeleteTaskMutation();
  const [open, setOpen] = useState<boolean>(true);
  const onDeleteTask = async () => {
    try {
      await deleteTask(id);
      router.back();
      toast("Task has been deleted.");
    } catch (error) {
      console.error(error);
      setOpen(false);
    }
  };

  return (
    //todo que en esta vista se muestre error state y loading state y hacer tests sobre eso
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure to delete the task?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your task
            from our servers.
          </AlertDialogDescription>
          {isError && <p>An error has ocurred when deleting the task</p>}
          {isSuccess && <p>Task deleted</p>}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            <Link href="/projects/tasks">Cancel</Link>
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onDeleteTask}
            data-testid={"delete-task-submit-button"}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
