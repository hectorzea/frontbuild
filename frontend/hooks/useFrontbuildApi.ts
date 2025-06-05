import { setAppData } from "@/lib/features/app/appSlice";
import { useGetLabelsQuery } from "@/lib/features/label/labelApiSlice";
import { useGetPriorityQuery } from "@/lib/features/priority/priorityApiSlice";
import { useGetStatusQuery } from "@/lib/features/status/statusApiSlice";
import { useGetTasksQuery } from "@/lib/features/tasks/tasksApiSlice";
import { setTasks } from "@/lib/features/tasks/tasksSlice";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

export const useFrontbuildApi = (mswLoaded: boolean) => {
    const dispatch = useDispatch();
    const [apiLoaded, setApiLoaded] = useState<boolean>(true);
    const {
        data: tasksData,
        isSuccess: isSuccessGetTasks,
        isError: isErrorGetTasks,
    } = useGetTasksQuery(undefined, { skip: !mswLoaded });

    const { data: labels, isSuccess: isSuccessGetLabels } =
        useGetLabelsQuery(undefined, { skip: !mswLoaded });

    const { data: statuses, isSuccess: isSuccessGetStatus } =
        useGetStatusQuery(undefined, { skip: !mswLoaded });
    const { data: priorities, isSuccess: isSuccessGetPriorities } =
        useGetPriorityQuery(undefined, { skip: !mswLoaded });

    useEffect(() => {
        if (isSuccessGetTasks && isSuccessGetLabels && isSuccessGetStatus && isSuccessGetPriorities) {
            console.log('Api loaded successfully...');
            setApiLoaded(true);
            dispatch(setAppData({ labels, statuses, priorities }));
            dispatch(setTasks(tasksData));
        }
        if (isErrorGetTasks) {
            console.error('Error loading tasks from API');
            setApiLoaded(false);
        }
    }, [isSuccessGetTasks, isSuccessGetLabels, isSuccessGetStatus, isSuccessGetPriorities, isErrorGetTasks]);


    return apiLoaded
}