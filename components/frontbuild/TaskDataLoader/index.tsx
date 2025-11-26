"use client";
import React, { useEffect } from "react";
import { Loading } from "@/components/common/Loading";
import { useGetTasksQuery } from "@/lib/features/tasks/tasksApiSlice";
import { useDispatch } from "react-redux";
import { setTasks } from "@/lib/features/tasks/tasksSlice";

type TaskDataLoaderProps = {
  children?: React.ReactNode;
};

const TaskDataLoader = ({ children }: TaskDataLoaderProps) => {
  const dispatch = useDispatch();
  const { data, isSuccess, isError } = useGetTasksQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setTasks(data));
    }
  }, [data, dispatch, isSuccess]);

  if (isError) {
    return (
      <div className="flex flex-col h-screen items-center justify-center gap-y-2">
        An error has ocurred while loading tasks from the API.
      </div>
    );
  }

  if (isSuccess) return <>{children}</>;

  return <Loading loadingText="Loading tasks" />;
};

export default TaskDataLoader;
