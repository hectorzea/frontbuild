import React, { useEffect } from 'react'
import { useGetLabelsQuery } from '@/lib/features/label/labelApiSlice';
import { useGetStatusQuery } from '@/lib/features/status/statusApiSlice';
import { useGetPriorityQuery } from '@/lib/features/priority/priorityApiSlice';
import { setAppData } from '@/lib/features/app/appSlice';
import { useGetTasksQuery } from '@/lib/features/tasks/tasksApiSlice';
import { useDispatch } from 'react-redux';
import { selectAllTasks, setTasks } from '@/lib/features/tasks/tasksSlice';
import { Loading } from '../Loading';
import { DataTable } from '../DataTable';
import { columns } from '@/components/frontbuild/DataTable/Columns';
import { useAppSelector } from '@/lib/hooks';

const Tabla = () => {
    const dispatch = useDispatch();
    const tasks = useAppSelector(selectAllTasks);
    const { data: tasksData, isLoading: isLoadingTasks, isSuccess: isSuccessGetTasks } =
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
        <DataTable data={tasks} columns={columns} data-testid={'frontbuild-table'} />
    )
}

export default Tabla