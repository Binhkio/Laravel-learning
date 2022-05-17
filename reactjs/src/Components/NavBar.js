import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('_token');
        navigate("/login");    
    }

    return (
        <div className="flex justify-around p-8 text-2xl font-medium">
            <Link to="/home">
                <div>Home</div>
            </Link>

            <Link to="/restaurant">
                <div>My Restaurants</div>
            </Link>

            <Link to="/create">
                <div>Create new</div>
            </Link>

            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default NavBar;