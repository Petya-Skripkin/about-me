import { ReactNode } from "react";
import "./styles.css";
import { useRandomColor } from "@/hooks/useRandomColor";

interface IBadge {
  children: ReactNode;
}

export default function Badge({ children }: IBadge) {
  const color = useRandomColor();

  return (
    <span
      style={{
        borderColor: `${color}`,
        backgroundColor: color + 31,
      }}
      className="badges"
    >
      {children}
    </span>
  );
}
