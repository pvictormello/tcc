import { ButtonHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

const Button = ({
  type = "button",
  disabled,
  size,
  color,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg" | "full" | "square";
  color?: "primary" | "secondary" | "white" | "danger";
}) => {
  const button = tv({
    base: "rounded-lg font-semibold flex items-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:opacity-25 flex justify-center",
    variants: {
      color: {
        primary: "bg-blue-600 text-white hover:bg-blue-500",
        secondary: "bg-blue-50 text-blue-600 hover:bg-blue-100",
        white: "bg-white text-slate-900 hover:bg-slate-100",
        danger: "bg-red-600 text-white hover:bg-red-500",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-sm sm:text-base",
        lg: "px-12 py-2",
        full: "px-4 py-2 w-full",
        square: "px-2 py-2 text-sm",
      },
    },
    defaultVariants: {
      size: "md",
      color: "primary",
    },
  });

  return (
    <button {...props} className={button({ size, color })} disabled={disabled} type={type}>
      {children}
    </button>
  );
};

export default Button;
