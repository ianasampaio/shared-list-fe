import { Button } from "../../../../../components/Button";
import { Input } from "../../../../../components/Input";
import { Modal } from "../../../../../components/Modal";

interface ShareListModalProps {
  open: boolean;
  onClose(): void;
}

export function ShareListModal({ open, onClose }: ShareListModalProps) {
  return (
    <Modal open={open} title={"Convidar Colaborador"} onClose={onClose}>
      <form>
        <div className="mt-8 mb-4 flex justify-center">
          <span>Insira o e-mail para convidar um colaborador </span>
        </div>
        <Input type="email" name="email" placeholder="E-mail" />

        <Button type="submit" className="w-full mt-6">
          Convidar
        </Button>
      </form>
    </Modal>
  );
}
