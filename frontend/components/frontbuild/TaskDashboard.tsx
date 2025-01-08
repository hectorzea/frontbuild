import { Button } from '@/components/ui/button';
import { useGetTasksQuery } from '@/lib/features/tasks/tasksApiSlice';
import React, { useEffect, useState } from 'react';
import { DataTable } from './DataTable/DataTable';
import { columns } from './DataTable/Columns';

export const TaskDashboard = () => {
  const { data: tasks, isError, isLoading, isSuccess } =
    useGetTasksQuery();

  if (isLoading) {
    return <>LoadingTable...</>
  }

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Welcome back!</h2>
      <p className="text-muted-foreground">
        FrontBuild all task repository!
      </p>
      <div className="mt-8">
        <h2 className="text-1xl font-bold mb-3">Frontend </h2>
        <DataTable data={tasks} columns={columns} />
      </div>
    </div>
  );
};