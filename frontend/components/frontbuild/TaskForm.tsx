import React from 'react'
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { Task, taskSchema } from './schema'
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
import { useFetchStatus } from '@/hooks/useFetchStatus';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label, Priority, Status } from '@/src/types/api/Api';
import { useFetchLabels } from '@/hooks/useFetchLabels';
import { useFetchPriorities } from '@/hooks/useFetchPriorities';
import Box from 'ui-box'
import { TaskMode } from './TaskDialog/types';
import axios from 'axios';


interface TaskFormProps {
    defaultValues?: Partial<Task>;
    mode: TaskMode
}

export const TaskForm: React.FC<TaskFormProps> = ({ defaultValues, mode }) => {

    const form = useForm<Task>({
        resolver: zodResolver(taskSchema),
        defaultValues,
    });

    const { statuses } = useFetchStatus();
    const { labels } = useFetchLabels();
    const { priorities } = useFetchPriorities();


    const onSubmit = async (values: z.infer<typeof taskSchema>) => {
        try {
            if (mode === "add") {
                const response = await axios.post("http://localhost:8080/api/tasks/add", values);
                if (response?.data) {
                    console.log("Task added successfully!");
                }
            } else if (mode === "edit") {
                // if (!values.id) throw new Error("Task ID is required for editing.");
                // await axios.put(`http://localhost:8080/api/tasks/${values.id}`, values);
                // console.log("Task updated successfully!");
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