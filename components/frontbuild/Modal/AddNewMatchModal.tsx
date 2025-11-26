import ModalWrapper from "@/components/frontbuild/Modal/ModalWrapper";
import { MulliganCreatorForm } from "../MulliganCreatorForm";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import MockServiceWorkerWrapper from "../MockServiceWorkerWrapper";

interface AddNewMatchModalProps {
  route?: string;
}

export default function AddNewMatchModal({ route }: AddNewMatchModalProps) {
  return (
    <ModalWrapper route={route}>
      <DialogHeader>
        <DialogTitle>New Match</DialogTitle>
        <DialogDescription>
          Add the match URL and indicate W / L
        </DialogDescription>
      </DialogHeader>
      <MockServiceWorkerWrapper>
        <MulliganCreatorForm route={route} />
      </MockServiceWorkerWrapper>
    </ModalWrapper>
  );
}
