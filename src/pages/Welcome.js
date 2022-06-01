// imports
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LogInForm from "../components/LogIn/LogInForm";

const Welcome = (props) => {
    // redux selector
    const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);
    
    // if is authenticated then redirect
    if (isAuthenticated) { return <Navigate to='/films' />; }
    
    // else show login form
    else { return <LogInForm />; }
};

export default Welcome;
