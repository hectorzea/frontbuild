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
import { UserNav } from '@/components/frontbuild/UserNav';

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
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight" data-testid={'frontbuild-title'}>FrontBuild</h2>
          <p className="text-muted-foreground">
            All of the tasks regarding this repo lays here.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <UserNav />
        </div>
      </div>
      {!isErrorGetTasks ? <DataTable data={tasks} columns={columns} data-testid={'frontbuild-table'} /> : <div>Error loading tasks</div>}
      <h1>API URL: {process.env.NEXT_PUBLIC_TEST_API_URL}</h1>
      <p>Enable Mocks: {process.env.NEXT_PUBLIC_ENABLE_MSW}</p>
      <p>FRONTBUILD_API_URL:{process.env.NEXT_PUBLIC_FRONTBUILD_API_URL}</p>
    </div>
  );
};