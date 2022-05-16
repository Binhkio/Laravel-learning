import React, { useState } from "react";
import Link from 'react-router-dom';
import axios from 'axios';
import apiURL from '../Context/constants';

function Login (){
    const [loginForm, setLoginForm] = useState({
        username : "",
        password : ""
    });
    const [err, setErr] = useState("");

    const loginSubmit = async (event) => {
        event.preventDefault();

        try{
            const res = await axios.post(`${apiURL}/login`,loginForm)
            console.log(res.data, res.status, res.data.token);
            document.cookie = res.data.token;
        }
        catch(error){
            console.log(error);
        }
        
    }

    return (
        <>
            <form style={{margin: "50px"}}>
                <div>
                    <p>Username</p>
                    <input type="text" name="username" value={loginForm.username} onChange={ (e) => {setLoginForm({...loginForm, username:e.target.value})} } placeholder="Username..." />
                </div>
                <br/>
                <div>
                    <p>Password</p>
                    <input type="password" name="password" value={loginForm.password} onChange={ (e) => {setLoginForm({...loginForm, password:e.target.value})}} placeholder="Password..." />
                </div>
                <div>
                    <p style={{color:'red', fontWeight:'bold'}}>{err}</p>
                </div>
                <button type="submit" onClick={ loginSubmit } >Login</button>
            </form>
        </>
    );
}

export default Login;