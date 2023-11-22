import { Fragment, PropsWithChildren } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { tv } from "tailwind-variants";

export default function Modal({
  children,
  show = false,
  closeable = true,
  maxWidth,
  onClose = () => {},
}: PropsWithChildren<{
  show: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
  closeable?: boolean;
  onClose: CallableFunction;
}>) {
  const close = () => {
    if (closeable) {
      onClose();
    }
  };

  const modal = tv({
    base: "bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",
    variants: {
      maxWidth: {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl",
      },
    },
    defaultVariants: {
      maxWidth: "2xl",
    },
  });

  return (
    <Transition show={show} as={Fragment} leave="duration-200">
      <Dialog
        as="div"
        id="modal"
        className="fixed inset-0 flex overflow-y-auto p-4 sm:px-0 items-center z-50 transform transition-all"
        onClose={close}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 bg-gray-600/75" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <Dialog.Panel className={modal({ maxWidth })}>
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
