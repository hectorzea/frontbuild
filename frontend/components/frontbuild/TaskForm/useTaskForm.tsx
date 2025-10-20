import * as React from "react";

export const useTaskForm = () => {
  const onSubmit = async (values: z.infer<typeof taskSchema>) => {
    try {
      let task;
      if (!id) {
        task = await addTaskApi(values);
        dispatch(addTask(task));
        router.back();
      } else {
        task = await updateTaskApi(values);
        dispatch(modifyTask(task));
        toast("Task has been updated.");
        router.back();
      }
    } catch (error) {
      console.error("Error submitting task:", error);
      toast.error("Failed to save task.");
    }
  };

  return { onSubmit };
};
