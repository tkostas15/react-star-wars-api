import Button from "./Button";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi } from "@fortawesome/free-solid-svg-icons";
import { ModalProps } from "../../types/AllTypes";
import { ReactElement } from "react";

const styles = require("./Modal.module.css");

const Modal: React.FC<ModalProps> = ({
  description,
  button,
  onButtonClick,
  className = "",
}): ReactElement => {
  return (
    <Fragment>
      <div className={`${styles.modal} ${className}`}>
        <header>
          <FontAwesomeIcon icon={faJedi} />
        </header>
        <main>{description}</main>
        <footer>
          <Button onClick={onButtonClick}>{button}</Button>
        </footer>
      </div>
    </Fragment>
  );
};

export default Modal;
