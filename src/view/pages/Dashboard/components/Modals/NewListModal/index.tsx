import { Button } from "../../../../../components/Button";
import { Input } from "../../../../../components/Input";
import { Modal } from "../../../../../components/Modal";

interface NewListModalProps {
  open: boolean;
  onClose(): void;
}

export function NewListModal({ open, onClose }: NewListModalProps) {
  return (
    <Modal open={open} title={"Nova Lista"} onClose={onClose}>
      <form>
        <div className="mt-10">
          <Input type="text" name="name" placeholder="Nome da Lista" />
        </div>

        <Button type="submit" className="w-full mt-6">
          Criar
        </Button>
      </form>
    </Modal>
  );
}
