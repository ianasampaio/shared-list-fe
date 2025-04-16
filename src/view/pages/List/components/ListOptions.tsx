import { DotsVerticalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from "../../../components/DropdownMenu";
import { Pencil, Trash2, UserPlus } from "lucide-react";
import { RenameListModal } from "./Modals/RenameListModal";
import { useModal } from "../../../../app/hooks/useModal";
import { DeleteListModal } from "./Modals/DeleteListModal";
import { ShareListModal } from "./Modals/ShareListModal";

export function ListOptions() {
  const renameModal = useModal();
  const deleteModal = useModal();
  const shareModal = useModal();

  return (
    <>
      <DropdownMenuRoot>
        <DropdownMenuTrigger>
          <div className="hover:bg-bg-dark hover:rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
            <DotsVerticalIcon />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-40">
          <DropdownMenuItem
            onSelect={renameModal.open}
            className="flex items-center justify-start"
          >
            <Pencil className="w-4 h-4 mr-2" />
            Renomear
          </DropdownMenuItem>

          <DropdownMenuItem
            onSelect={shareModal.open}
            className="flex items-center justify-start"
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Compartilhar
          </DropdownMenuItem>

          <DropdownMenuItem
            onSelect={deleteModal.open}
            className="flex items-center justify-start"
          >
            <Trash2 className="w-4 h-4 mr-2 text-error" />
            Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>

      <RenameListModal open={renameModal.isOpen} onClose={renameModal.close} />
      <ShareListModal open={shareModal.isOpen} onClose={shareModal.close} />
      <DeleteListModal open={deleteModal.isOpen} onClose={deleteModal.close} />
    </>
  );
}
