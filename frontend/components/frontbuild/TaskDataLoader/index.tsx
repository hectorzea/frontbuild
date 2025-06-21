"use client";
import { useMsw } from "@/hooks/useMsw";
import React from "react";
import { Loading } from "@/components/frontbuild/Loading";
import { useFrontbuildApi } from "@/hooks/useFrontbuildApi";

type TaskDataLoaderProps = {
  children?: React.ReactNode;
};

const TaskDataLoader = ({ children }: TaskDataLoaderProps) => {
  const mswLoaded = useMsw();
  const { apiHasError } = useFrontbuildApi(mswLoaded);

  if (!mswLoaded) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (apiHasError) {
    return (
      <div className="flex flex-col h-screen items-center justify-center gap-y-2">
        <Loading />
        An error has ocurred while loading tasks from the API.
      </div>
    );
  }
  console.log("TaskDataLoader final");
  return <>{children}</>;
};

export default TaskDataLoader;
