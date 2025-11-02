"use client";
import { useGetTaskByIdQuery } from "@/lib/features/tasks/tasksApiSlice";
import { setTask } from "@/lib/features/tasks/tasksSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Loading } from "@/components/common/Loading";
import ServerError from "@/components/common/Error";

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
    return (
      <ServerError
        message={"Error getting task by id"}
        description="Please, find the correct id and try again later"
      />
    );
  }
  if (isSuccessGetTasks) {
    return <>{children}</>;
  }

  return <Loading loadingText="Loading task..." />;
}
