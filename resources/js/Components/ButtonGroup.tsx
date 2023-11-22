import { ButtonHTMLAttributes, PropsWithChildren, useState } from "react";

export const ButtonGroupItem = ({
  type = "button",
  label,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { label: string }) => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <div className="relative">
      <button
        {...props}
        className="flex items-center justify-center px-2 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        type={type}
        onMouseOver={() => setShowPopover(true)}
        onMouseLeave={() => setShowPopover(false)}
      >
        {children}
      </button>

      {showPopover && (
        <div className="absolute inset-x-0 -top-8 flex justify-center">
          <div className="bg-white ring-1 ring-gray-200 px-2 rounded-lg shadow text-sm font-medium">
            {label}
          </div>
        </div>
      )}
    </div>
  );
};

const ButtonGroup = ({ children }: PropsWithChildren) => {
  return (
    <div className="inline-flex items-center rounded-lg ring-1 ring-gray-200 divide-x divide-gray-200">
      {children}
    </div>
  );
};

export default ButtonGroup;
