import Button from "./Button";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi } from "@fortawesome/free-solid-svg-icons";

const styles = require("./Modal.module.css");

const Modal = (props: any): any => {
  return (
    <Fragment>
      <div className={`${styles.modal} ${props.className}`}>
        <header>
          <FontAwesomeIcon icon={faJedi} />
        </header>
        <main>{props.description}</main>
        <footer>
          <Button onClick={props.onClick}>{props.button}</Button>
        </footer>
      </div>
    </Fragment>
  );
};

export default Modal;
