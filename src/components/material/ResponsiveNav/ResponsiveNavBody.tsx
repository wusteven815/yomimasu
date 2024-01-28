import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ResponseNavBody({ children }: Props) {
  return children;
}
