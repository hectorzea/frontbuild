"use client";
import { useGetTaskByIdQuery } from "@/lib/features/tasks/tasksApiSlice";
import { setTask } from "@/lib/features/tasks/tasksSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export interface IAppProps {
  id: string;
  children: React.ReactNode;
}

export function TaskEditLoader({ id, children }: IAppProps) {
  const dispatch = useDispatch();
  const {
    data: tasksData,
    isSuccess: isSuccessGetTasks,
    isError: isErrorGetTasks,
  } = useGetTaskByIdQuery(id);

  useEffect(() => {
    if (isSuccessGetTasks) {
      console.log("Success tasks", tasksData);
      dispatch(setTask(tasksData));
    }
  }, [dispatch, tasksData, isSuccessGetTasks]);

  if (isErrorGetTasks) {
    return <>Error on getting tasks...</>;
  }

  if (isSuccessGetTasks) {
    return <>{children}</>;
  }

  return <>Loading...</>;
}
