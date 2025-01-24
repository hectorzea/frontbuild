import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { TaskForm } from '../TaskForm'
import { TaskMode } from './types'
import { Task } from '../../../app/schemas'


interface TaskDialogDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  mode: TaskMode
  task?: Task;
}


export const TaskDialog: React.FC<TaskDialogDialogProps> = ({ mode, open, onOpenChange, task }) => {

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{mode} Task</DialogTitle>
          <DialogDescription>
            Make changes to the task here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <TaskForm mode={mode} defaultValues={task} onOpenChange={onOpenChange} />
      </DialogContent>
    </Dialog>
  )
}
