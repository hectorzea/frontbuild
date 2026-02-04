"use client";
import { type FC, type ReactNode } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

interface ModalWindowProps {
  children: ReactNode;
  route?: string;
}

const ModalWrapper: FC<ModalWindowProps> = ({ children, route }) => {
  const router = useRouter();
  return (
    <Dialog
      defaultOpen={true}
      onOpenChange={() => {
        router.back();
      }}
    >
      <DialogContent
        className="sm:max-w-[425px]"
        //TODO: can we still improve this?
        onEscapeKeyDown={() => {
          router.push(route ? route : "");
        }}
        onInteractOutside={() => {
          router.push(route ? route : "");
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
