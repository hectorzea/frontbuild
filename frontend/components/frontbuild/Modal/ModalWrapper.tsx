"use client";
import { type FC, type ReactNode } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
interface ModalWindowProps {
  children: ReactNode;
  route?: string;
}

const ModalWrapper: FC<ModalWindowProps> = ({ children, route }) => {
  console.log(route);
  return (
    //TODO CHEQUEAR DESPUES DEFAULT OPEN SI ES NECESARIO O NO
    <Dialog defaultOpen={true}>
      <DialogContent
        className="sm:max-w-[425px]"
        //TODO PARA EVITAR QUE CIERRE EL DIALOGO PERO ESTO DEBERIA SER FLEXIBE
        // onEscapeKeyDown={(e) => e.preventDefault()}
        // onInteractOutside={(e) => {
        //   e.preventDefault();
        // }}
      >
        {children}
        {/* <ModalFooter /> */}
      </DialogContent>
    </Dialog>
  );
};

export default ModalWrapper;
