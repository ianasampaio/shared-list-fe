import { Checkbox } from "radix-ui";
import { CheckIcon } from "@radix-ui/react-icons";

interface ItemProps {
  description: string;
  modifiedBy: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function Item({
  checked,
  description,
  modifiedBy,
  onCheckedChange,
}: ItemProps) {
  return (
    <div className="flex items-center p-1.5 hover:bg-bg-dark rounded-lg">
      <Checkbox.Root
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="justify-start size-[18px] appearance-none rounded bg-border-shadow"
        id=""
      >
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <div className="flex items-baseline justify-between w-full">
        <span
          className={`text-text-light pl-2 transition-all ${
            checked ? "line-through !text-text-light/50" : ""
          }`}
        >
          {description}
        </span>

        <span className="text-xs text-text-light/30">{modifiedBy}</span>
      </div>
    </div>
  );
}
