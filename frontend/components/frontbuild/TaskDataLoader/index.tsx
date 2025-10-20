"use client";
import React from "react";
import { Loading } from "@/components/frontbuild/Loading";
import { useFrontbuildApi } from "@/hooks/useFrontbuildApi";

type TaskDataLoaderProps = {
  children?: React.ReactNode;
};

const TaskDataLoader = ({ children }: TaskDataLoaderProps) => {
  const { isErrorGetTasks } = useFrontbuildApi();

  if (isErrorGetTasks) {
    return (
      <div className="flex flex-col h-screen items-center justify-center gap-y-2">
        <Loading />
        An error has ocurred while loading tasks from the API.
      </div>
    );
  }
  return <>{children}</>;
};

export default TaskDataLoader;
