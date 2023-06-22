import { ReactElement, FC } from "react";
import { UIButtonProps } from "../../types/AllTypes";
import styles from "./Button.module.css";

const Button: FC<UIButtonProps> = ({
  type,
  disabled,
  onClick,
  children,
  className = "",
}): ReactElement => {
  return (
    <button
      type={type || "button"}
      disabled={disabled || false}
      className={`${styles.button} ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
