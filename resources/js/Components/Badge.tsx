import { PropsWithChildren } from "react";

const Badge = ({ children }: PropsWithChildren) => {
  return (
    <div className="px-2 py-1 bg-blue-50 rounded-full font-medium text-blue-800 text-xs inline-flex items-center ring-1 ring-blue-400/20">
      {children}
    </div>
  );
};

export default Badge;
