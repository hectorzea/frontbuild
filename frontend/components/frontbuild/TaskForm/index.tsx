import React from 'react'
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { Task, taskSchema } from '@/app/schemas'
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Input
} from "@/components/ui/input"
import {
    Button
} from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label, Priority, Status } from '@/app/types/api/Api';
import Box from 'ui-box'
import { TaskMode } from '@/components/frontbuild/TaskDialog/types';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { addTask, modifyTask } from '@/lib/features/tasks/tasksSlice';
import { useAppSelector } from '@/lib/hooks';
import { selectLabels, selectPriorities, selectStatuses } from '@/lib/features/app/appSlice';
import { updateTaskApi, addTaskApi } from '@/lib/features/tasks/api';


interface TaskFormProps {
    defaultValues?: Partial<Task>;
    onOpenChange: (open: boolean) => void
    mode: TaskMode
}

export const TaskForm: React.FC<TaskFormProps> = ({ defaultValues, mode, onOpenChange }) => {
    const dispatch = useDispatch();
    const form = useForm<Task>({
        resolver: zodResolver(taskSchema),
        defaultValues,
    });

    const labels = useAppSelector(selectLabels);
    const statuses = useAppSelector(selectStatuses);
    const priorities = useAppSelector(selectPriorities);

    const onSubmit = async (values: z.infer<typeof taskSchema>) => {
        try {
            let task;
            if (mode === 'add') {
                task = await addTaskApi(values);
                dispatch(addTask(task));
                toast('Task has been created.');
            } else if (mode === 'edit') {
                if (!values._id) throw new Error('Task ID is required for editing.');
                task = await updateTaskApi(values);
                dispatch(modifyTask(task));
                toast('Task has been updated.');
            }
            onOpenChange(false);
        } catch (error) {
            console.error('Error submitting task:', error);
            toast.error('Failed to save task.');
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
                                <Input placeholder="Task title" {...field} data-testid="task-form-title" />
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
                                            <SelectItem value={status.value} key={status.value} data-testid={`status-item-${status.value}`}>
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
                                            <SelectItem key={label.value} value={label.value} data-testid={`label-item-${label.value}`}>
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
                                            <SelectItem key={priority.value} value={priority.value} data-testid={`priority-item-${priority.value}`}>
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
                <Box display='flex' justifyContent='end'>
                    <Button data-testid='task-form-submit-button' type="submit">Save Task</Button>
                </Box>
            </form>
        </Form>
    )
}