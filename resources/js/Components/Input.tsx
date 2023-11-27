import { InputHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

const Input = ({
  type = "text",
  inputSize,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  inputSize?: "sm" | "md";
}) => {
  const input = tv({
    base: "w-full rounded-md border-0 px-3 py-2 text-slate-900 ring-2 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600",
    variants: {
      inputSize: {
        sm: "px-2 py-2 text-sm",
        md: "px-3 py-2",
      },
    },
    defaultVariants: {
      inputSize: "md",
    },
  });

  return <input {...props} type={type} className={input({ inputSize })} />;
};

export default Input;
