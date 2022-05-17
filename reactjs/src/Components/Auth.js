import { Outlet, Navigate } from "react-router-dom";

const Auth = () => {
    const token = localStorage.getItem("_token");
    if (token === null) {
        return <Navigate to="/login" />
    }
    return <Outlet />;
};

export default Auth;