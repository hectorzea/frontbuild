import { Button } from '@/components/ui/button';
import { useGetTasksQuery } from '@/lib/features/tasks/tasksApiSlice';
import React, { useEffect, useState } from 'react';
import { DataTable } from './DataTable/DataTable';
import { columns } from './DataTable/Columns';
import { useDispatch } from 'react-redux';
import { useGetLabelsQuery } from '@/lib/features/label/labelApiSlice';
import { useGetStatusQuery } from '@/lib/features/status/statusApiSlice';
import { useGetPriorityQuery } from '@/lib/features/priority/priorityApiSlice';
import { selectTasks, setAppData } from '@/lib/features/app/appSlice';
import { useAppSelector } from '@/lib/hooks';

export const TaskDashboard = () => {
  //probar con poblar tasks slice
  const dispatch = useDispatch();
  const { data: tasks, isError, isLoading, isSuccess } =
    useGetTasksQuery();

  const { data: labels, isSuccess: isSuccessGetLabels } =
    useGetLabelsQuery();
  const { data: statuses, isSuccess: isSuccessGetStatus } =
    useGetStatusQuery();
  const { data: priorities, isSuccess: isSuccessGetPriorities } =
    useGetPriorityQuery();

  const tasksSelector = useAppSelector(selectTasks);

  console.log(tasksSelector)


  useEffect(() => {
    if (isSuccessGetLabels && isSuccessGetStatus && isSuccessGetPriorities && isSuccess) {
      dispatch(setAppData({ labels, statuses, priorities, tasks }));
    }
  }, [isSuccessGetLabels, isSuccessGetStatus, isSuccessGetPriorities, labels, statuses, priorities, dispatch]);

  if (isLoading) {
    return <>LoadingTable...</>
  }


  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold" data-testid={'frontbuild-title'}>Welcome back!</h2>
      <p className="text-muted-foreground">
        FrontBuild all task repository!
      </p>
      <div className="mt-8">
        <h2 className="text-1xl font-bold mb-3">Frontend </h2>
        <DataTable data={tasksSelector!} columns={columns} data-testid={'frontbuild-table'} />
      </div>
    </div>
  );
};