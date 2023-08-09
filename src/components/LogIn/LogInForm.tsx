import Button from "../UI/Button";
import { Fragment, ReactElement } from "react";
import { useDispatch } from "react-redux";
import { loginStart } from "../../store/authSlice";
import { useFormik, FormikErrors } from "formik";

import styles from "./LogInForm.module.css";

const LogInForm = (): ReactElement => {
  // redux dispatcher
  const dispatchAction = useDispatch();

  // handlers
  const formSubmitHandler = (event: any): void => {
    event.preventDefault();

    // Credentials valid => Log in
    dispatchAction(loginStart());
  };

  // formik types
  interface FormikValues {
    logInUserName: string;
    logInPassword: string;
  }

  // formik initial values
  const formikInitial: FormikValues = {
    logInUserName: "",
    logInPassword: "",
  };

  // formik validation
  const formikValidation = (
    values: FormikValues
  ): FormikErrors<FormikValues> => {
    const errors: FormikErrors<FormikValues> = {};
    if (values.logInUserName === "") errors.logInUserName = "Required";
    if (values.logInPassword === "") errors.logInPassword = "Required";
    return errors;
  };

  // formik setup
  const formik = useFormik({
    initialValues: formikInitial,
    validate: formikValidation,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (): void => {},
  });

  // return the form
  return (
    <Fragment>
      <div className={styles.loginFormWrapper}>
        <form className={styles.loginForm} onSubmit={formSubmitHandler}>
          <div className={styles.loginForm__control}>
            <label htmlFor="logInUserName"> username </label>
            <input
              className={`${
                formik.errors.logInUserName && styles.loginForm__error
              }`}
              type="text"
              id="logInUserName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.logInUserName}
            />
            {formik.errors.logInUserName && (
              <span className={styles.loginForm__warning}>
                {" "}
                {formik.errors.logInUserName}{" "}
              </span>
            )}
          </div>

          <div className={styles.loginForm__control}>
            <label htmlFor="logInPassword"> password </label>
            <input
              className={`${
                formik.errors.logInPassword && styles.loginForm__error
              }`}
              type="password"
              id="logInPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.logInPassword}
            />
            {formik.errors.logInPassword && (
              <span className={styles.loginForm__warning}>
                {" "}
                {formik.errors.logInPassword}{" "}
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
