"use client";
import React, { useEffect, useState } from 'react';
import { UserNav } from '@/components/frontbuild/UserNav';
import { Loading } from '@/components/frontbuild/Loading';
import { ModeToggle } from '../ModeToggle';
import { setUpMocks } from '@/app/mocks/setupMocks';
import Tabla from './Tabla';

type TaskDashboardProps = {
  title: string;
};

export const TaskDashboard = ({ title }: TaskDashboardProps) => {
  // const tasks = useAppSelector(selectAllTasks);
  // const { data: tasksData, isLoading: isLoadingTasks, isSuccess: isSuccessGetTasks, isError: isErrorGetTasks } =
  //   useGetTasksQuery();

  // const { data: labels, isSuccess: isSuccessGetLabels } =
  //   useGetLabelsQuery();
  // const { data: statuses, isSuccess: isSuccessGetStatus } =
  //   useGetStatusQuery();
  // const { data: priorities, isSuccess: isSuccessGetPriorities } =
  //   useGetPriorityQuery();

  // const [isMswReady, setIsMswReady] = useState<boolean>(false);

  // useEffect(() => {
  //   const initializeMocking = async () => {
  //     if (process.env.NEXT_PUBLIC_ENABLE_MSW === "true") {
  //       await setUpMocks();
  //     }
  //     setIsMswReady(true);
  //   };
  //   initializeMocking();
  // }, []);

  // useEffect(() => {
  //   if (isSuccessGetLabels && isSuccessGetStatus && isSuccessGetPriorities && isSuccessGetTasks) {
  //     dispatch(setAppData({ labels, statuses, priorities }));
  //     dispatch(setTasks(tasksData));
  //   }
  // }, [isSuccessGetLabels, isSuccessGetTasks, isSuccessGetStatus, tasksData, isSuccessGetPriorities, labels, statuses, priorities, dispatch]);

  // if (isLoadingTasks) {
  //   return <div className='flex justify-center items-center h-screen'><Loading /></div>;
  // }

  // if (!isMswReady) {
  //   return <div className='flex justify-center items-center h-screen'><Loading /></div>;
  // }

  return (
    <div className="h-full flex-1 flex-col space-y-4 p-4 sm:p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight" data-testid={'frontbuild-title'}>FrontBuild</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            {title}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <UserNav />
          <ModeToggle />
        </div>
      </div>
      {/* {!isMswReady ? <>error msw</> : <Tabla />} */}
    </div>
  );
};