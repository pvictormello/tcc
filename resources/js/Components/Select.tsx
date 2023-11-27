import { Listbox, ListboxProps } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

const Select = ({
  value,
  onChange,
  label,
  size,
  children,
}: PropsWithChildren<{
  value: any;
  onChange: (value: any) => void;
  label: string;
  size?: "sm" | "md";
}>) => {
  const select = tv({
    base: "flex w-full items-center justify-between rounded-md border-0 bg-white text-slate-900 ring-2 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600",
    variants: {
      size: {
        sm: "px-2 py-2 text-sm",
        md: "px-3 py-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  });

  return (
    <Listbox value={value} onChange={onChange}>
      <div>
        <Listbox.Button className={select({ size })}>
          <div>{label}</div>
          <ChevronUpDownIcon className="h-6 w-6" />
        </Listbox.Button>
        <Listbox.Options className="absolute mt-1 w-40 rounded-md border-0 bg-white py-1 text-slate-900 shadow ring-1 ring-slate-200/40 focus:outline-none">
          {children}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

const Option = ({
  value,
  selected,
  children,
}: PropsWithChildren<{
  value: any;
  selected: boolean;
}>) => {
  return (
    <Listbox.Option
      value={value}
      className={({ active }) => `cursor-pointer px-3 py-2 ${active ? "bg-blue-100 text-blue-900" : "text-slate-900"}`}
    >
      <div className={selected ? "font-medium" : "font-normal"}>{children}</div>
    </Listbox.Option>
  );
};

Select.Option = Option;
export default Select;
