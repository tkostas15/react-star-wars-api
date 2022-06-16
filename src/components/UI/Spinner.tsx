import { ReactElement } from "react";
import { SpinnerProps } from "../../types/AllTypes";
const styles = require("./Spinner.module.css");

const Spinner: React.FC<SpinnerProps> = ({ icon, ms }): ReactElement => {
  return (
    <div className={styles.spinner}>
      <img
        alt="Waiting for the API"
        src={icon}
        style={{ animationDuration: ms + "ms" || "2000ms" }}
      />
    </div>
  );
};

export default Spinner;
