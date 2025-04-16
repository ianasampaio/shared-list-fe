import { PlusIcon } from "@radix-ui/react-icons";

interface FabProps {
  onClick(): void;
}

export function Fab({ onClick }: FabProps) {
  return (
    <button
      onClick={onClick}
      className="fixed right-8 bottom-8 w-14 h-14 rounded-full bg-button text-white flex items-center justify-center md:hover:scale-105 transition-transform duration-300 md:hover:overflow-visible md:hover:bg-button-hover shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] cursor-pointer"
    >
      <PlusIcon className="w-6 h-6" />
    </button>
  );
}
