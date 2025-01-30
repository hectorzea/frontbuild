import React from 'react'
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { Task, taskSchema } from '../../app/schemas'
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
import { TaskMode } from './TaskDialog/types';
import axios from 'axios';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { addTask, modifyTask } from '@/lib/features/tasks/tasksSlice';
import { useAppSelector } from '@/lib/hooks';
import { selectLabels, selectPriorities, selectStatuses } from '@/lib/features/app/appSlice';


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
        console.log(values)
        //todo ver como mejorar esta parte del codigo
        try {
            if (mode === "add") {
                const response = await axios.post("http://localhost:8080/api/tasks/add", values);
                if (response?.data) {
                    console.log("Task added successfully!");
                    onOpenChange(false);
                    toast("Task has been created.")
                    dispatch(addTask(response.data?.task))

                }
            } else if (mode === "edit") {
                console.log(`values`, values)
                if (!values._id) throw new Error("Task ID is required for editing.");
                const response = await axios.put(`http://localhost:8080/api/tasks/${values._id}`, values);
                onOpenChange(false)
                dispatch(modifyTask(response.data?.task))
                toast("Task has been updated.")
            }
        } catch (error) {
            console.error("Error submitting task:", error);
        }
    }

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
                                <Input placeholder="Task title" {...field} />
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
                        <FormItem>
                            <FormLabel>Label</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a label" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectGroup>
                                        {labels?.map((label: Label) => (
                                            <SelectItem key={label.value} value={label.value}>
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
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a priority" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectGroup>
                                        {priorities?.map((priority: Priority) => (
                                            <SelectItem key={priority.value} value={priority.value}>
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
                    <Button type="submit">Save</Button>
                </Box>
            </form>
        </Form>
    )
}