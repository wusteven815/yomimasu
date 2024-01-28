import data from "./iconMap";

interface Props {
  className?: string;
  filled?: boolean;
  name: string;
}

export default function Icon({ className = "", filled = false, name }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      className={className}
    >
      <path d={data.get(`${name}-${filled}`)} />
    </svg>
  );
}
