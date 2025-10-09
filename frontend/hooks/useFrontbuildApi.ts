import { setAppData } from "@/lib/features/app/appSlice";
import { useGetLabelsQuery } from "@/lib/features/label/labelApiSlice";
import { useGetPriorityQuery } from "@/lib/features/priority/priorityApiSlice";
import { useGetStatusQuery } from "@/lib/features/status/statusApiSlice";
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

  const {
    data: labels,
    isSuccess: isSuccessGetLabels,
    isError: isErrorGetLabels,
  } = useGetLabelsQuery();
  const {
    data: statuses,
    isSuccess: isSuccessGetStatus,
    isError: isErrorGetStatuses,
  } = useGetStatusQuery();
  const {
    data: priorities,
    isSuccess: isSuccessGetPriorities,
    isError: isErrorGetPriorities,
  } = useGetPriorityQuery();

  const apiHasError =
    isErrorGetTasks ||
    isErrorGetLabels ||
    isErrorGetStatuses ||
    isErrorGetPriorities;
  const apiSuccess =
    isSuccessGetTasks &&
    isSuccessGetLabels &&
    isSuccessGetStatus &&
    isSuccessGetPriorities;

  useEffect(() => {
    if (apiSuccess) {
      console.log("Api loaded successfully...");
      dispatch(setAppData({ labels, statuses, priorities }));
      dispatch(setTasks(tasksData));
    }
    if (apiHasError) {
      console.error("Error loading tasks from API");
    }
  }, [
    isSuccessGetTasks,
    isSuccessGetLabels,
    isSuccessGetStatus,
    isSuccessGetPriorities,
    isErrorGetTasks,
  ]);

  return { apiHasError };
};
