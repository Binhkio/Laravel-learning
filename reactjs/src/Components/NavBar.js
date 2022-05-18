import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('_token');
        navigate("/login");    
    }

    return (
        <div className="p-8 text-2xl inline float-left font-medium text-slate-300">
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