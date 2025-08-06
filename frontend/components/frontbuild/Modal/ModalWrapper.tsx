"use client";
import type { FC, ReactNode } from "react";
import { ModalFooter } from "./ModalFooter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
interface ModalWindowProps {
  children: ReactNode;
  route?: string;
}

const ModalWrapper: FC<ModalWindowProps> = ({ children, route }) => {
  return (
    <Dialog defaultOpen={true}>
      <form>
        <DialogContent
          className="sm:max-w-[425px]"
          onEscapeKeyDown={(e) => e.preventDefault()}
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <DialogHeader>
            <DialogTitle>New Match</DialogTitle>
            <DialogDescription>
              Add the match URL, use the switch for (W/L) and save.
            </DialogDescription>
          </DialogHeader>
          {children}
          <ModalFooter route={route} />
        </DialogContent>
      </form>
    </Dialog>

    // <div className="fixed inset-0 z-50 flex items-center justify-center mx-auto pointer-events-none">
    //   <div className="fixed inset-0 bg-black bg-opacity-50" />
    //   <div className="relative z-10 pointer-events-auto">
    //     {children}
    //     <ModalButton route={route} />
    //   </div>
    // </div>
  );
};

export default ModalWrapper;
