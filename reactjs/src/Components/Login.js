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
        <div className="max-h-screen min-h-screen flex justify-center items-center">
        <div className="text-purple-500 border-2 rounded-3xl backdrop-blur-xl border-purple-500 shadow-2xl shadow-purple-500/90">
            <form className="m-16 flex flex-col gap-6 ">
                <div className="text-2xl font-bold grid grid-cols-2 gap-8">
                    <Link to="/login">
                        <div className="tracking-wide border-2 text-center border-green-600 rounded-2xl px-3 py-2 text-green-400 cursor-pointer hover:bg-green-500 hover:text-green-100">Login</div>
                    </Link>
                    <Link to="/register">
                        <div className="tracking-wide border-2 text-center border-yellow-600 rounded-2xl px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-500 hover:text-yellow-100">Register</div>
                    </Link>
                </div>
                <div className="mt-4">
                    <p className="text-3xl font-bold p-2 tracking-wide">Username</p>
                    <input className="p-2 outline-none border-b-2 border-cyan-500 text-2xl font-bold font-sans bg-transparent" type="text" name="username" value={loginForm.username} onChange={ (e) => {setLoginForm({...loginForm, username:e.target.value})} } placeholder="" />
                </div>
                <div>
                    <p className="text-3xl font-bold p-2 tracking-wide">Password</p>
                    <input className="p-2 outline-none border-b-2 border-cyan-500 text-2xl font-bold font-sans bg-transparent" type="password" name="password" value={loginForm.password} onChange={ (e) => {setLoginForm({...loginForm, password:e.target.value})}} placeholder="" />
                </div>
                <div>
                    <p className="m-2 text-xl text-red-500">{err}</p>
                </div>
                <button className="text-2xl tracking-wide font-bold border-2 border-green-600 rounded-3xl py-2 text-green-400 cursor-pointer hover:bg-green-500 hover:text-green-100" type="submit" onClick={ loginSubmit } >Login</button>
            </form>
        </div>
        </div>
    );
}

export default Login;