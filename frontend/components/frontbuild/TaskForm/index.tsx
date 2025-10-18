"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Task, taskSchema } from "@/app/schemas";
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
import { Label, Priority, Status } from "@/app/types/api/Api";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { addTask, modifyTask } from "@/lib/features/tasks/tasksSlice";
import { useAppSelector } from "@/lib/hooks";
import {
  selectLabels,
  selectPriorities,
  selectStatuses,
} from "@/lib/features/app/appSlice";
import { updateTaskApi, addTaskApi } from "@/lib/features/tasks/api";
// import Link from "next/link";
import { useRouter } from "next/navigation";

interface TaskFormProps {
  route?: string;
  id?: string;
}

export const TaskForm: React.FC<TaskFormProps> = ({ route, id }) => {
  console.log(route);
  const router = useRouter();
  const dispatch = useDispatch();
  const form = useForm<Task>({
    resolver: zodResolver(taskSchema),
    defaultValues: { title: "", label: "", priority: "", status: "" },
  });

  const labels = useAppSelector(selectLabels);
  const statuses = useAppSelector(selectStatuses);
  const priorities = useAppSelector(selectPriorities);

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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Task title"
                  {...field}
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
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger data-testid="task-form-status">
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    {statuses?.map((status: Status) => (
                      <SelectItem
                        value={status.value}
                        key={status.value}
                        data-testid={`status-item-${status.value}`}
                      >
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
            <FormItem>
              <FormLabel>Label</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
            <FormItem>
              <FormLabel>Priority</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
          <Button data-testid="task-form-submit-button" type="submit">
            Save Task
          </Button>
          <Button
            data-testid="task-form-submit-button"
            onClick={() => {
              router.back();
            }}
          >
            Close Task
          </Button>
        </div>
      </form>
    </Form>
  );
};
