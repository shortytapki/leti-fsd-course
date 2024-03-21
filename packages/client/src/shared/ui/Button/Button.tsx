import { ButtonHTMLAttributes, ReactElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactElement | string;
  isDisabled?: boolean;
}

export const Button = ({ className, children, onClick, isDisabled }: ButtonProps) => {
  return <button onClick={onClick} className={`bg-black text-white py-2 px-4 hover:bg-white hover:text-black hover:border-black hover:border hover:border-solid ${isDisabled && 'pointer-events-none'} ${className}`}>{children}</button>;
};
