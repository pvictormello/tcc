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
  size?: "sm" | "md" | "lg" | "full";
  color?: "primary" | "secondary" | "white" | "danger";
}) => {
  const button = tv({
    base: "rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:opacity-25",
    variants: {
      color: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-blue-50 text-blue-800 hover:bg-blue-100",
        white: "bg-white text-gray-900 hover:bg-gray-100",
        danger: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2",
        lg: "px-12 py-2",
        full: "px-4 py-2 w-full",
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
