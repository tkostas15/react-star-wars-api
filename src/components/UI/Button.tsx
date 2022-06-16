import { ReactElement } from "react";
import { UIButtonProps } from "../../types/AllTypes";
const styles = require("./Button.module.css");

const Button: React.FC<UIButtonProps> = ({
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
