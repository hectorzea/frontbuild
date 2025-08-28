import ModalWrapper from "@/components/frontbuild/Modal/ModalWrapper";
import { MulliganCreatorForm } from "../MulliganCreatorForm";

interface AddNewMatchModalProps {
  route?: string;
}

export default function AddNewMatchModal({ route }: AddNewMatchModalProps) {
  return (
    <ModalWrapper route={route}>
      <MulliganCreatorForm route={route} />
    </ModalWrapper>
  );
}
