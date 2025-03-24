import { ComponentProps, forwardRef } from "react";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { cn } from "../../app/utils/cn";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, id, placeholder, error, className, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          name={name}
          id={inputId}
          className={cn(
            "bg-bg-light w-full text-text-light rounded-lg border border-border-shadow px-3 h-[52px] pt-4 peer placeholder-shown:pt-0 autofill:border-border-shadow autofill:text-text-light autofill:bg-bg-light focus:border-focus transition-all outline-none",
            error && "!border-error",
            className
          )}
          placeholder=" "
        />

        <label
          htmlFor={inputId}
          className="absolute text-xs left-[13px] top-2 pointer-events-none text-text-light peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
          // className="absolute left-[13px] top-3.5 pointer-events-none text-text-light"
        >
          {placeholder}
        </label>

        {error && (
          <div className="flex gap-2 items-center mt-2 text-error">
            <CrossCircledIcon />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
