import Button from "../UI/Button";
import styles from "./LogInForm.module.css";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { loginStart } from "../../store/authSlice";
import { useFormik } from "formik";

const LogInForm = () => {
  // redux dispatcher
  const dispatchAction = useDispatch();

  // handlers
  const formSubmitHandler = (event) => {
    event.preventDefault();

    // Credentials valid => Log in
    dispatchAction(loginStart());
  };

  // formik
  const formik = useFormik({
    initialValues: {
      logInUserName: "",
      logInPassword: "",
    },
    validate: (values) => {
      const errors = {};
      if (values.logInUserName === "") errors.username = "Required";
      if (values.logInPassword === "") errors.password = "Required";
      return errors;
    },
    validateOnBlur: true,
    validateOnChange: true,
  });

  // return the form
  return (
    <Fragment>
      <div className={styles.loginFormWrapper}>
        <form className={styles.loginForm} onSubmit={formSubmitHandler}>
          <div className={styles.loginForm__control}>
            <label htmlFor="logInUserName"> username </label>
            <input
              className={`${formik.errors.username && styles.loginForm__error}`}
              type="text"
              id="logInUserName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.logInUserName}
            />
            {formik.errors.username && (
              <span className={styles.loginForm__warning}>
                {" "}
                {formik.errors.username}{" "}
              </span>
            )}
          </div>

          <div className={styles.loginForm__control}>
            <label htmlFor="logInPassword"> password </label>
            <input
              className={`${formik.errors.password && styles.loginForm__error}`}
              type="password"
              id="logInPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.logInPassword}
            />
            {formik.errors.password && (
              <span className={styles.loginForm__warning}>
                {" "}
                {formik.errors.password}{" "}
              </span>
            )}
          </div>

          <div className={styles.loginForm__actions}>
            <Button type="submit" disabled={!(formik.isValid && formik.dirty)}>
              Enter universe
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default LogInForm;
