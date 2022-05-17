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
        <div className=" ">
            <form className="p-16 place-content-center font-mono text-xl inline-block rounded-3xl bg-gradient-to-b from-violet-500 to-fuchsia-500">
                <div className="text-2xl font-bold grid grid-cols-2 gap-4">
                    <Link to="/login">
                        <div>Login</div>
                    </Link>
                    <Link to="/register">
                        <div>Register</div>
                    </Link>
                </div>
                <div className="mt-10">
                    <p className="text-2xl font-medium">Nickname</p>
                    <input className="" type="text" name="nickname" value={registerForm.username} onChange={ (e) => {setRegisterForm({...registerForm, username:e.target.value})} } placeholder="Nickname..." />
                </div>
                <br/>
                <div>
                    <p className="text-2xl font-medium">Username</p>
                    <input className="" type="text" name="username" value={registerForm.username} onChange={ (e) => {setRegisterForm({...registerForm, username:e.target.value})} } placeholder="Username..." />
                </div>
                <br/>
                <div>
                    <p className="text-2xl font-medium">Password</p>
                    <input type="password" name="password" value={registerForm.password} onChange={ (e) => {setRegisterForm({...registerForm, password:e.target.value})}} placeholder="Password..." />
                </div>
                <div>
                    <p style={{color:'red', fontWeight:'bold'}}>{err}</p>
                </div>
                <button className="w-32 p-4 m-4 bg-cyan-300 hover:bg-indigo-300 ease-in-out duration-300 rounded-full hover:scale-110" type="submit" onClick={ registerSubmit } >Register</button>
            </form>
        </div>
    );
}

export default Login;