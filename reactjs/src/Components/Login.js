import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import {apiUrl} from '../Context/constants';

function Login (){
    const [loginForm, setLoginForm] = useState({
        username : "",
        password : ""
    });
    const [err, setErr] = useState("");

    const navigate = useNavigate();

    const loginSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await axios.post(`${apiUrl}/login`,loginForm);
            
            console.log(response.data, response.status, response.data.token);
            // document.cookie = `_token = ${response.data.token}; Max-Age = ${24*60*60}`;
            localStorage.setItem("_token", response.data.token);
            if(response.status === 200){
                navigate("/home");
            }
        }
        catch(error){
            setErr("Account or Password not found !!");
            console.log(error);
        }
        
    }

    return (
        <div className=" ">
            <form className=" p-16 place-content-center font-mono text-xl inline-block rounded-3xl bg-gradient-to-b from-violet-500 to-fuchsia-500">
                <div className="text-2xl font-bold grid grid-cols-2 gap-4">
                    <Link to="/login">
                        <div>Login</div>
                    </Link>
                    <Link to="/register">
                        <div>Register</div>
                    </Link>
                </div>
                <div className="mt-10">
                    <p className="text-2xl font-medium p-2">Username</p>
                    <input className="rounded-lg pl-4 py-1 border-2 border-cyan-500/100" type="text" name="username" value={loginForm.username} onChange={ (e) => {setLoginForm({...loginForm, username:e.target.value})} } placeholder="Username..." />
                </div>
                <br/>
                <div>
                    <p className="text-2xl font-medium p-2">Password</p>
                    <input className="rounded-lg pl-4 py-1 border-2 border-cyan-500/100" type="password" name="password" value={loginForm.password} onChange={ (e) => {setLoginForm({...loginForm, password:e.target.value})}} placeholder="Password..." />
                </div>
                <div>
                    <p className="mt-8 text-red-800">{err}</p>
                </div>
                <button className="w-32 p-4 m-4 bg-cyan-300 hover:bg-indigo-300 ease-in-out duration-300 rounded-full hover:scale-110" type="submit" onClick={ loginSubmit } >Login</button>
            </form>
        </div>
    );
}

export default Login;