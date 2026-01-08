"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Task, taskSchema } from "@/app/(frontbuild)/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Label,
  LabelOptions,
  Priority,
  PriorityOptions,
  Status,
  StatusOptions,
} from "@/app/(frontbuild)/types/api/Api";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import {
  addTask,
  modifyTask,
  selectTask,
} from "@/lib/features/tasks/tasksSlice";
import { useRouter } from "next/navigation";
import { labels, priorities, statuses } from "./data";
import { useAppSelector } from "@/lib/hooks";
import {
  useCreateTaskMutation,
  useUpdateTaskMutation,
} from "@/lib/features/tasks/tasksApiSlice";

interface TaskFormProps {
  id?: string;
}

//todo, como se usan ahora mutaciones,
// ver como ajustar para manejar estados open / close en casos como estos check Delete Task
export const TaskForm: React.FC<TaskFormProps> = ({ id }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const task = useAppSelector(selectTask);
  const [createTask] = useCreateTaskMutation();
  const [updateTask, { isError, isSuccess }] = useUpdateTaskMutation();
  const form = useForm<Task>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      status: StatusOptions.Done,
      label: LabelOptions.Bug,
      priority: PriorityOptions.High,
      title: "",
    },
    values: task,
  });

  const onSubmit = async (values: z.infer<typeof taskSchema>) => {
    try {
      let task;
      if (!id) {
        task = await createTask(values);
        dispatch(addTask(task.data!));
        router.back();
        toast("Task has been created.");
      } else {
        task = await updateTask(values);
        dispatch(modifyTask(task.data!));
        router.back();
        toast("Task has been updated");
      }
    } catch (error) {
      console.error("Error submitting task:", error);
      toast.error("Failed to save task.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Title</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="Task title"
                  data-testid="task-form-title"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            // added key field https://github.com/shadcn-ui/ui/issues/1253
            <FormItem key={field.value}>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} {...field}>
                <FormControl data-testid="task-form-status">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    {statuses?.map((status: Status) => (
                      <SelectItem value={status.value} key={status.value}>
                        {status.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem key={field.value}>
              <FormLabel>Label</FormLabel>
              <Select onValueChange={field.onChange} {...field}>
                <FormControl data-testid="task-form-label">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a label" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    {labels?.map((label: Label) => (
                      <SelectItem
                        key={label.value}
                        value={label.value}
                        data-testid={`label-item-${label.value}`}
                      >
                        {label.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem key={field.value}>
              <FormLabel>Priority</FormLabel>
              {/* value={field.value} es lo mismo a {...field} */}
              <Select onValueChange={field.onChange} {...field}>
                <FormControl data-testid="task-form-priority">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a priority" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    {priorities?.map((priority: Priority) => (
                      <SelectItem
                        key={priority.value}
                        value={priority.value}
                        data-testid={`priority-item-${priority.value}`}
                      >
                        {priority.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2">
          <Button
            className="bg-green-500"
            data-testid="task-form-submit-button"
            type="submit"
          >
            {id ? "Edit Task" : "Save Task"}
          </Button>
          <Button
            type="button"
            data-testid="close-task-form-submit-button"
            onClick={() => {
              router.back();
            }}
          >
            Close Task
          </Button>
        </div>
        {/*TODO: generar transicion despues con framer motion  */}
        {isError && <p>Error editing task</p>}
        {isSuccess && <p>Edit task success</p>}
      </form>
    </Form>
  );
};
