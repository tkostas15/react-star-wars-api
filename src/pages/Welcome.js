// imports
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LogInForm from "../components/LogIn/LogInForm";
import { getIsAuthenticatedUsingLocalStorage } from "../store/authSlice";

const Welcome = (props) => {
  // redux selector
  const isAuthenticated = useSelector(getIsAuthenticatedUsingLocalStorage);

  // if is authenticated then redirect
  if (isAuthenticated) {
    return <Navigate to="/films" />;
  }

  // else show login form
  else {
    return <LogInForm />;
  }
};

export default Welcome;
