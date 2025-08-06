import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface ModalButtonProps {
  route?: string;
}

export const ModalFooter: FC<ModalButtonProps> = () => {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };

  return (
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline" onClick={handleClose}>
          Cancel
        </Button>
      </DialogClose>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  );
};
