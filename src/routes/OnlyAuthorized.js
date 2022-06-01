import { Navigate } from "react-router-dom";
import { isAuthenticatedLocalStorage } from '../store/authentication';
import { useSelector } from "react-redux";

const OnlyAuthorized = (props) => {
    // get is authenticated
    const isAuthenticated = useSelector(isAuthenticatedLocalStorage);
    
    // navigate depending on authenticated
    return (isAuthenticated) ? props.children : <Navigate to='/welcome' replace />;
};

export default OnlyAuthorized;