import { Navigate } from "react-router-dom";
import { getIsAuthenticatedUsingLocalStorage } from "../store/authSlice";
import { useSelector } from "react-redux";

const OnlyAuthorized = (props) => {
  // get is authenticated
  const isAuthenticated = useSelector(getIsAuthenticatedUsingLocalStorage);

  // navigate depending on authenticated
  return isAuthenticated ? props.children : <Navigate to="/welcome" replace />;
};

export default OnlyAuthorized;
