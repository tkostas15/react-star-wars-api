// imports
import { Navigate } from "react-router-dom";

// export sagas
export function* login () {return <Navigate to='/films' replace />}

export function* logout () {return <Navigate to='/welcome' replace />}