"use client"

import { Row } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { labels } from "../data"
import { taskSchema } from "../schema"
import { TaskDialog } from "../TaskDialog/TaskDialog"
import { useState } from "react"
import { ConfirmationDialog } from "../ConfirmationDialog/ConfirmationDialog"
import axios from "axios"
import { toast } from "sonner"

interface DataTableRowActionsProps<TData> {
    row: Row<TData>
}

export function DataTableRowActions<TData>({
    row,
}: DataTableRowActionsProps<TData>) {
    const task = taskSchema.parse(row.original)
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
    const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState<boolean>(false)

    const onDeleteTask = async () => {
        try {
            await axios.post("http://localhost:8080/api/tasks/add", { _id: task._id });
            setConfirmationDialogOpen(false)
            toast('Task deleted')
        } catch (error) {
            setConfirmationDialogOpen(false);
            toast('Error on deleting task')
        }
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                    >
                        <MoreHorizontal />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[160px]">
                    <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
                        Edit Task
                    </DropdownMenuItem>
                    <DropdownMenuItem>Make a copy</DropdownMenuItem>
                    <DropdownMenuItem>Favorite</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                            <DropdownMenuRadioGroup value={task.label}>
                                {labels.map((label) => (
                                    <DropdownMenuRadioItem key={label.value} value={label.value}>
                                        {label.label}
                                    </DropdownMenuRadioItem>
                                ))}
                            </DropdownMenuRadioGroup>
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setConfirmationDialogOpen(true)}>
                        Delete
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <TaskDialog task={task} mode={"edit"} open={isDialogOpen} onOpenChange={setIsDialogOpen} />
            <ConfirmationDialog open={isConfirmationDialogOpen} onOpenChange={setConfirmationDialogOpen} onAccept={onDeleteTask} />
        </>
    )
}