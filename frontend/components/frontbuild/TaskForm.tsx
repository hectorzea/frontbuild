import React from 'react'
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { Task, taskSchema } from './schema'
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
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
import { Label, Status } from '@/src/types/api/Api';
import { useFetchLabels } from '@/hooks/useFetchLabels';


interface TaskFormProps {
    defaultValues?: Partial<Task>;
}

export const TaskForm: React.FC<TaskFormProps> = ({ defaultValues }) => {

    const form = useForm<Task>({
        resolver: zodResolver(taskSchema),
        defaultValues,
    });

    const { statuses } = useFetchStatus();
    const { labels } = useFetchLabels();


    const onSubmit = (values: z.infer<typeof taskSchema>) => {
        console.log(`values -->`, values)
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
                            <FormDescription>Enter the task title.</FormDescription>
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
                            <FormDescription>Select one of the status.</FormDescription>
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
                            <FormDescription>Select one of the labels.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* <FormField
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
                                        {statuses?.map((status) => (
                                            <SelectItem key={status} value={status}>
                                                {status}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <FormDescription>Select one priority.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                /> */}
                <Button type="submit">Save</Button>
            </form>
        </Form>
    )
}