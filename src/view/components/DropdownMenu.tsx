import { DropdownMenu } from "radix-ui";
import { cn } from "../../app/utils/cn";

export function DropdownMenuRoot({ children }: { children: React.ReactNode }) {
  return <DropdownMenu.Root>{children}</DropdownMenu.Root>;
}

export function DropdownMenuTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DropdownMenu.Trigger className="outline-none">
      {children}
    </DropdownMenu.Trigger>
  );
}

interface DropdownMenuContentProps {
  children: React.ReactNode;
  className?: string;
}

export function DropdownMenuContent({
  children,
  className,
}: DropdownMenuContentProps) {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        className={cn(
          "rounded-2xl mt-1 p-2 bg-border-shadow space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]",
          className
        )}
        align="end"
      >
        {children}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  );
}

interface DropdownMenuItemProps {
  children: React.ReactNode;
  className?: string;
  onSelect?(): void;
}

export function DropdownMenuItem({
  children,
  className,
  onSelect,
}: DropdownMenuItemProps) {
  return (
    <DropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        "min-h-[48px] flex items-center py-2 px-4 text-sm cursor-pointer text-text-light data-[highlighted]:bg-black/5 transition-colors rounded-2xl outline-none",
        className
      )}
    >
      {children}
    </DropdownMenu.Item>
  );
}
