import type { ReactNode } from "react";
import style from "./Button.module.scss";

export const Button = ({
  children,
  type,
  onClick,
}: {
  children: ReactNode;
  type: "submit" | "button" | "reset";
  onClick?: () => void;
}) => {
  return (
    <button type={type} className={style.button} onClick={onClick}>
      {children}
    </button>
  );
};
