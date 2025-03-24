import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";
import { Spinner } from "./Spinner";

interface Buttonprops extends ComponentProps<"button"> {
  isPendind?: boolean;
}

export function Button({
  className,
  isPendind,
  disabled,
  children,
  ...props
}: Buttonprops) {
  return (
    <button
      {...props}
      disabled={disabled || isPendind}
      className={cn(
        "bg-button hover:bg-button-hover disabled:bg-bg-light disabled:cursor-not-allowed cursor-pointer px-6 h-12 rounded-2xl font-medium text-bg-dark transition-all flex items-center justify-center",
        className
      )}
    >
      {!isPendind && children}
      {isPendind && <Spinner className="w-6 h-6" />}
    </button>
  );
}
