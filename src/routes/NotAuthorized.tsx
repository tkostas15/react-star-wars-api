import { Navigate } from "react-router-dom";
import { getIsAuthenticatedUsingLocalStorage } from "../store/authSlice";
import { useSelector } from "react-redux";

const NotAuthorized = (props: any): any => {
  // get is authenticated
  const isAuthenticated = useSelector(getIsAuthenticatedUsingLocalStorage);

  // navigate depending on authenticated
  return !isAuthenticated ? props.children : <Navigate to="/films" replace />;
};

export default NotAuthorized;
