import { List } from "lucide-react";
import { cn } from "../../app/utils/cn";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div
      className={cn("flex items-center gap-1 opacity-30 text-logo", className)}
    >
      <List className="w-6 h-5" />
      <span className="text-[16px] font-bold">Shared List</span>
    </div>
  );
}
