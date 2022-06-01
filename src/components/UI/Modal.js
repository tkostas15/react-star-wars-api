import styles from "./Modal.module.css";
import Button from "../UI/Button";
import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi } from '@fortawesome/free-solid-svg-icons'

const Modal = (props) => {
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
