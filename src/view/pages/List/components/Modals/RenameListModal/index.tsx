import { Button } from "../../../../../components/Button";
import { Input } from "../../../../../components/Input";
import { Modal } from "../../../../../components/Modal";

interface RenameListModalProps {
  open: boolean;
  onClose(): void;
}

export function RenameListModal({ open, onClose }: RenameListModalProps) {
  return (
    <Modal open={open} title={"Renomear Lista"} onClose={onClose}>
      <form>
        <div className="mt-8">
          <Input type="text" name="name" placeholder="Nome da Lista" />
        </div>

        <Button type="submit" className="w-full mt-6">
          Renomear
        </Button>
      </form>
    </Modal>
  );
}
