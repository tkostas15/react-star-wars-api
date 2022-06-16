// imports
import Button from "../UI/Button";
import { ReactElement } from "react";
import { HeaderProps } from "../../types/AllTypes";

// for redux
import { useDispatch } from "react-redux";
import { logoutStart } from "../../store/authSlice";

// load css module
const styles = require("./Header.module.css");

const Header: React.FC<HeaderProps> = ({
  hasBack,
  onClickBack = () => {},
}): ReactElement => {
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
      {hasBack !== 0 && (
        <button type="button" onClick={onClickBack} className={styles.back}>
          Back
        </button>
      )}
    </header>
  );
};

export default Header;
