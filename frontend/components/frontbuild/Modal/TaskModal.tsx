import ModalWrapper from "@/components/frontbuild/Modal/ModalWrapper";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import MockServiceWorkerWrapper from "../MockServiceWorkerWrapper";
import { TaskForm } from "../TaskForm";
import { TaskLoader } from "../TaskForm/TaskLoader";

interface AddNewMatchModalProps {
  route?: string;
  id?: string;
}

export default function TaskModal({ route, id }: AddNewMatchModalProps) {
  return (
    <ModalWrapper route={route}>
      <DialogHeader>
        <DialogTitle>{`${!id ? "New Task" : "Edit Task"}`}</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <MockServiceWorkerWrapper>
        <TaskLoader id={id}>
          <TaskForm route={route} id={id} />
        </TaskLoader>
      </MockServiceWorkerWrapper>
    </ModalWrapper>
  );
}
