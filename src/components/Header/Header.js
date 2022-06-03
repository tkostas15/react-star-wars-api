// imports
import styles from "./Header.module.css";
import Button from "../UI/Button";

// for redux
import { useDispatch } from "react-redux";
import { logoutStart } from "../../store/authSlice";

const Header = (props) => {
  // dispatch
  const dispatchAction = useDispatch();

  // handlers
  const logoutHandler = () => {
    dispatchAction(logoutStart());
  };

  // return
  return (
    <header className={styles.header}>
      <Button onClick={logoutHandler}>Log out</Button>
      {props.hasBack !== 0 && (
        <button
          type="button"
          onClick={props.onClickBack}
          className={styles.back}
        >
          Back
        </button>
      )}
    </header>
  );
};

export default Header;
