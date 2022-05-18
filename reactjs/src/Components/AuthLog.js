import { Outlet, Navigate } from "react-router-dom";

const AuthLog = () => {
    const token = localStorage.getItem("_token");
    if (token !== null) {
        return <Navigate to="/home" />
    }
    return <Outlet />;
};

export default AuthLog;