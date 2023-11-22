import { TextareaHTMLAttributes } from "react";

const Textarea = ({
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      {...props}
      className="rounded-md text-gray-900 ring-2 ring-gray-200 px-3 py-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-600"
    />
  );
};

export default Textarea;
