import { Outlet } from "react-router-dom"


const Auth = () => {

    

    return (
        <div className="auth-page">
            <h1>Welcome to Web Study</h1>
            <h2>Do your best</h2>
            <h3>The rest will come</h3>
            <div className="auth-form">
                {<Outlet/>}
            </div>
        </div>
    )
};

export default Auth;