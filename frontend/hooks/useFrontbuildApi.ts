import { useGetTasksQuery } from "@/lib/features/tasks/tasksApiSlice";
import { useEffect, useState } from "react"

export const useFrontbuildApi = (mswLoaded: boolean) => {
    const [apiLoaded, setApiLoaded] = useState<boolean>(true);
    const {
        // data: tasksData,
        // isLoading: isLoadingTasks,
        isSuccess: isSuccessGetTasks,
        // isError: isErrorGetTasks,
    } = useGetTasksQuery(undefined, { skip: !mswLoaded });

    useEffect(() => {
        console.log('Loading api...');
        if (isSuccessGetTasks) {
            setApiLoaded(true);
        }
    }, [isSuccessGetTasks]);


    return apiLoaded
}