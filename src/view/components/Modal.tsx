import { Dialog } from "radix-ui";
import { cn } from "../../app/utils/cn";
import { Cross2Icon } from "@radix-ui/react-icons";

interface ModalProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose?(): void;
}

export function Modal({ open, onClose, children, title }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 bg-black/50 backdrop-blur-sm",
            "data-[state=open]:animate-overlay-show border-none"
          )}
        />
        <Dialog.Content
          className={cn(
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-2xl bg-bg-light shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] outline-none w-full max-w-[400px]",
            "data-[state=open]:animate-content-show"
          )}
        >
          <header className="h-12 flex items-center justify-center relative text-text-light">
            <button
              onClick={onClose}
              className="h-12 w-12 absolute left-0 flex items-center justify-center outline-none cursor-pointer"
            >
              <Cross2Icon className="w-6 h-6" />
            </button>

            <span className="text-lg tracking-[-1px] font-bold">{title}</span>
          </header>

          <div>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
