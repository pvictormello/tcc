import { InputHTMLAttributes, PropsWithChildren } from "react";

export const RadioGroupItem = ({
  label,
  image,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  image?: string;
}) => {
  return (
    <div className="relative">
      <input {...props} className="peer absolute h-full w-full opacity-0 cursor-pointer" type="radio" />
      <label className="flex h-full flex-1 cursor-pointer flex-col items-center justify-center gap-4 rounded-md border p-3 text-center text-sm font-semibold ring-1 ring-slate-200 peer-hover:bg-blue-50 peer-hover:ring-blue-600 peer-hover:ring-2 peer-hover:text-blue-600 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-0 peer-focus:ring-2 peer-focus:ring-blue-600 peer-focus:ring-offset-2">
        {image && <img className="w-24" src={image} />}
        <span>{label}</span>
      </label>
    </div>
  );
};

const RadioGroup = ({ gridCols, children }: PropsWithChildren<{ gridCols: string }>) => {
  return <div className={`grid h-full gap-4 ${gridCols}`}>{children}</div>;
};

export default RadioGroup;
