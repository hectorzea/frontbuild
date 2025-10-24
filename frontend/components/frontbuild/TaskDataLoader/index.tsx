"use client";
import React from "react";
import { Loading } from "@/components/common/Loading";
import { useFrontbuildApi } from "@/hooks/useFrontbuildApi";

type TaskDataLoaderProps = {
  children?: React.ReactNode;
};

const TaskDataLoader = ({ children }: TaskDataLoaderProps) => {
  const { isErrorGetTasks, isSuccessGetTasks } = useFrontbuildApi();

  if (isErrorGetTasks) {
    return (
      <div className="flex flex-col h-screen items-center justify-center gap-y-2">
        An error has ocurred while loading tasks from the API.
      </div>
    );
  }

  if (isSuccessGetTasks) return <>{children}</>;

  return <Loading loadingText="Loading tasks" />;
};

export default TaskDataLoader;
