import styles from "./Spinner.module.css";

const Spinner = (props) => {
  return (
    <div className={styles.spinner}>
      <img
        alt="Waiting for the API"
        src={props.icon}
        style={{ animationDuration: props.ms + "ms" || "2000ms" }}
      />
    </div>
  );
};

export default Spinner;