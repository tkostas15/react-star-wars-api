const styles = require("./Button.module.css");

const Button = (props: any): any => {
  return (
    <button
      type={props.type || "button"}
      disabled={props.disabled || false}
      className={`${styles.button} ${props.className || ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
