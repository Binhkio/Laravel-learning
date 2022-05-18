import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import {apiUrl} from '../Context/constants';

function Login (){
    const [registerForm, setRegisterForm] = useState({
        nickname : "",
        username : "",
        password : ""
    });
    const [err, setErr] = useState("");

    const navigate = useNavigate();

    const registerSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await axios.post(`${apiUrl}/register`,registerForm)
            console.log(response.data, response.status, response.data.token);
            // document.cookie = `_token = ${response.data.token}; Max-Age = ${24*60*60}`;
            localStorage.setItem("_token", response.data.token);
            if(response.status === 200){
                navigate("/login");
            }
        }
        catch(error){
            setErr("Something errors, try again !!");
            console.log(error);
        }
        
    }

    return (
        <div className="max-h-screen min-h-screen flex justify-center items-center">
        <div className="text-cyan-500 border-2 border-cyan-600 rounded-3xl backdrop-blur-md shadow-lg shadow-cyan-500">
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
                    <p className="text-2xl font-bold p-2 tracking-wide">Nickname</p>
                    <input className="rounded-lg pl-4 py-1 border-2 border-cyan-500/100" type="text" name="nickname" value={registerForm.username} onChange={ (e) => {setRegisterForm({...registerForm, username:e.target.value})} } placeholder="Nickname..." />
                </div>
                <div>
                    <p className="text-2xl font-bold p-2 tracking-wide">Username</p>
                    <input className="rounded-lg pl-4 py-1 border-2 border-cyan-500/100" type="text" name="username" value={registerForm.username} onChange={ (e) => {setRegisterForm({...registerForm, username:e.target.value})} } placeholder="Username..." />
                </div>
                <div>
                    <p className="text-2xl font-bold p-2 tracking-wide">Password</p>
                    <input className="rounded-lg pl-4 py-1 border-2 border-cyan-500/100" type="password" name="password" value={registerForm.password} onChange={ (e) => {setRegisterForm({...registerForm, password:e.target.value})}} placeholder="Password..." />
                </div>
                <div>
                    <p className="m-2 text-xl text-red-500">{err}</p>
                </div>
                <button className="text-2xl tracking-wide font-bold border-2 border-green-600 rounded-3xl py-2 text-green-400 cursor-pointer hover:bg-green-500 hover:text-green-100" type="submit" onClick={ registerSubmit } >Register</button>
            </form>
        </div>
        </div>
    );
}

export default Login;