import { InputHTMLAttributes } from "react";

const Input = ({
  type = "text",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      type={type}
      className="rounded-md text-gray-900 ring-2 ring-gray-200 px-3 py-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-600"
    />
  );
};

export default Input;
