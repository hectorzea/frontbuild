import { useGetTasksQuery } from "@/lib/features/tasks/tasksApiSlice";
import { setTasks } from "@/lib/features/tasks/tasksSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useFrontbuildApi = () => {
  const dispatch = useDispatch();
  const {
    data: tasksData,
    isSuccess: isSuccessGetTasks,
    isError: isErrorGetTasks,
  } = useGetTasksQuery();

  useEffect(() => {
    if (isSuccessGetTasks) {
      //todo remover dispatchers de labels statuses y priorititess slice apis
      // console.log("Api loaded successfully...");
      // dispatch(setAppData({ labels, statuses, priorities }));
      dispatch(setTasks(tasksData));
    }
    if (isErrorGetTasks) {
      console.error("Error loading tasks from API");
    }
  }, [dispatch, tasksData, isSuccessGetTasks, isErrorGetTasks]);

  return { isErrorGetTasks };
};
