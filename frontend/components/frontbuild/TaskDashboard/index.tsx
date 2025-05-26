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
import { Loading } from '@/components/frontbuild/Loading';
import { ModeToggle } from '../ModeToggle';
import { useT } from '@/app/i18n/client';

export const TaskDashboard = () => {
  const { t } = useT('tasks');
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
  }, [isSuccessGetLabels, isSuccessGetTasks, isSuccessGetStatus, tasksData, isSuccessGetPriorities, labels, statuses, priorities, dispatch]);

  if (isLoadingTasks) {
    return <div className='flex justify-center items-center h-screen'><Loading /></div>;
  }

  return (
    <div className="h-full flex-1 flex-col space-y-4 p-4 sm:p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight" data-testid={'frontbuild-title'}>{t('title')}</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            {t('subtitle')}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <UserNav />
          <ModeToggle />
        </div>
      </div>
      {!isErrorGetTasks ? <DataTable data={tasks} columns={columns} data-testid={'frontbuild-table'} /> : <div>Error loading tasks</div>}
    </div>
  );
};