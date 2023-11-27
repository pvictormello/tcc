import { ButtonHTMLAttributes, PropsWithChildren, useState } from "react";

export const ButtonGroupItem = ({
  type = "button",
  label,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { label?: string }) => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <button
        {...props}
        className="flex items-center justify-center px-2 py-2 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        type={type}
        onMouseOver={() => setShowPopover(true)}
        onMouseLeave={() => setShowPopover(false)}
      >
        {children}
      </button>

      {showPopover && label && (
        <div className="absolute mb-16 flex w-32 items-center justify-center">
          <div className="rounded-lg bg-white px-2 text-sm font-medium shadow ring-1 ring-slate-200/40">{label}</div>
        </div>
      )}
    </div>
  );
};

const ButtonGroup = ({ children }: PropsWithChildren) => {
  return (
    <div className="inline-flex items-center divide-x divide-slate-200 rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
      {children}
    </div>
  );
};

export default ButtonGroup;
