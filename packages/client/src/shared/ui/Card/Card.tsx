import { ReactElement } from "react";

interface CardProps {
  className?: string;
  label?: string;
  description?: string;
  isLoading?: boolean;
  children?: ReactElement;
}

export const Card = ({ className, label, description, isLoading, children }: CardProps) => {
  return <div className={`rounded-lg border-solid border-[5px] p-4 border-black ${isLoading && 'bg-gray-600'} ${className}`}>
	<p className="text-lg">{label}</p>
	<span className="text-sm">{description}</span>
	{children}
  </div>;
};
