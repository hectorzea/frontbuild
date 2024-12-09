import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { TaskForm } from './TaskForm'

interface EditTaskDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}


export const EditTaskDialog: React.FC<EditTaskDialogProps> = ({ open, onOpenChange }) => {

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>
            Make changes to the task here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <TaskForm defaultValues={{
          title: "",
          status: "",
          label: "",
          priority: "",
        }} />
      </DialogContent>
    </Dialog>
  )
}
