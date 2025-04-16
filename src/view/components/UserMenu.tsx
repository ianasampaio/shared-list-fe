import { ExitIcon } from "@radix-ui/react-icons";
import { UseAuth } from "../../app/hooks/useAuth";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from "./DropdownMenu";

export function UserMenu() {
  const { signout } = UseAuth();

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger>
        <div
          className={
            "bg-button-light rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
          }
        >
          <span className="text-sm tracking-[-0.5px] text-button-hover font-medium">
            IS
          </span>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-28">
        <DropdownMenuItem
          onSelect={signout}
          className="flex items-center justify-between"
        >
          Sair
          <ExitIcon className="w-4 h-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
}
