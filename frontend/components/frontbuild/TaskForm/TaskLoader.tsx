"use client";
import { useGetTaskByIdQuery } from "@/lib/features/tasks/tasksApiSlice";
import { useEffect } from "react";

export interface IAppProps {
  id?: string;
  children: React.ReactNode;
}

export function TaskLoader({ id, children }: IAppProps) {
  const {
    data: tasksData,
    isLoading,
    isSuccess: isSuccessGetTasks,
    isError: isErrorGetTasks,
  } = useGetTaskByIdQuery(id!, { skip: !id });

  useEffect(() => {
    if (isSuccessGetTasks) {
      console.log("Success tasks", tasksData);
    }
  }, [tasksData, isSuccessGetTasks]);

  if (isLoading) {
    return <>Loading getting data... </>;
  }

  if (isErrorGetTasks) {
    return <>Error on getting tasks...</>;
  }

  return children;
}
