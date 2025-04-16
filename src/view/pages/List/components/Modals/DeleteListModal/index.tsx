import { Button } from "../../../../../components/Button";
import { Modal } from "../../../../../components/Modal";

interface DeleteListModalProps {
  open: boolean;
  onClose(): void;
}

export function DeleteListModal({ open, onClose }: DeleteListModalProps) {
  return (
    <Modal open={open} title={"Excluir Lista"} onClose={onClose}>
      <form>
        <div className="mt-8 flex justify-center">
          <span>Tem certeza que deseja excluir a lista?</span>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <Button
            type="submit"
            className="w-full mt-6 bg-transparent border-2 border-solid border-text-light text-text-light hover:bg-text-light hover:text-bg-dark"
          >
            Cancelar
          </Button>

          <Button
            type="submit"
            className="w-full mt-6 bg-error hover:bg-error-hover"
          >
            Excluir
          </Button>
        </div>
      </form>
    </Modal>
  );
}
