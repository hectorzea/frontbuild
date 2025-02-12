import { useGetTasksQuery } from '@/lib/features/tasks/tasksApiSlice';
import React, { useEffect } from 'react';
import { DataTable } from '@/components/frontbuild/DataTable';
import { columns } from '@/components/frontbuild/DataTable/Columns';
import { useDispatch } from 'react-redux';
import { selectAllTasks, setTasks } from '@/lib/features/tasks/tasksSlice';
import { useGetLabelsQuery } from '@/lib/features/label/labelApiSlice';
import { useGetStatusQuery } from '@/lib/features/status/statusApiSlice';
import { useGetPriorityQuery } from '@/lib/features/priority/priorityApiSlice';
import { setAppData } from '@/lib/features/app/appSlice';
import { useAppSelector } from '@/lib/hooks';

export const TaskDashboard = () => {
  const dispatch = useDispatch();
  const tasks = useAppSelector(selectAllTasks);
  const { data: tasksData, isLoading: isLoadingTasks, isSuccess: isSuccessGetTasks, isError: isErrorGetTasks } =
    useGetTasksQuery();

  const { data: labels, isSuccess: isSuccessGetLabels } =
    useGetLabelsQuery();
  const { data: statuses, isSuccess: isSuccessGetStatus } =
    useGetStatusQuery();
  const { data: priorities, isSuccess: isSuccessGetPriorities } =
    useGetPriorityQuery();

  useEffect(() => {
    if (isSuccessGetLabels && isSuccessGetStatus && isSuccessGetPriorities && isSuccessGetTasks) {
      dispatch(setAppData({ labels, statuses, priorities }));
      dispatch(setTasks(tasksData));
    }
  }, [isSuccessGetLabels, isSuccessGetStatus, isSuccessGetPriorities, labels, statuses, priorities, dispatch]);

  if (isLoadingTasks) {
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
        {!isErrorGetTasks ? <DataTable data={tasks} columns={columns} data-testid={'frontbuild-table'} /> : <div>Error loading tasks</div>}
      </div>
    </div>
  );
};