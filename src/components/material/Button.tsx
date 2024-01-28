import { ReactNode } from "react";

interface Props {
  children: string;
  className?: string;
  onClick: () => void;
}

export default function Button({ children, className = "", onClick }: Props): ReactNode {
  return (
    <button
      className={`bg-accent hover:bg-accent-hover transition-colors py-2.5 px-6 rounded-full font-medium ${className}`}
      onClick={onClick}
      type="button"
    >
      <p className="text-black">{children}</p>
    </button>
  );
}
