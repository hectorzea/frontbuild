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
    <Dialog defaultOpen={true}>
      <DialogContent
        className="sm:max-w-[425px]"
        //TODO PARA EVITAR QUE CIERRE EL DIALOGO PERO ESTO DEBERIA SER FLEXIBE
        onEscapeKeyDown={(e) => {
          e.preventDefault();
        }}
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        {children}
        {/* todo ver como mejorar modals vs vistas edit...  */}
        {/* se puede agregar aqui la estructura faltante de <DialogFooter> </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default ModalWrapper;
