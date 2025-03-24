import { Logo } from "./Logo";
import { Spinner } from "./Spinner";
import { Transition } from "@headlessui/react";

interface LaunchScreenProps {
  isLoading: boolean;
}

export function LaunchScreen({ isLoading }: LaunchScreenProps) {
  return (
    <Transition show={isLoading}>
      <div className="transition duration-300 ease-in data-[closed]:opacity-0">
        <div className="bg-button fixed top-0 left-0 w-full h-full grid place-items-center">
          <div className="flex flex-col items-center gap-2">
            <Logo className="h-10 text-white opacity-100" />
            <Spinner className="text-button fill-white h-6" />
          </div>
        </div>
      </div>
    </Transition>
  );
}
