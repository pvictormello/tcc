import { PropsWithChildren } from "react";

const FormField = ({ label, error, children }: PropsWithChildren<{ label?: string; error?: string }>) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="block text-sm font-medium">{label}</label>}
      {children}
      {error && <div className="text-red-400">{error}</div>}
    </div>
  );
};

export default FormField;
