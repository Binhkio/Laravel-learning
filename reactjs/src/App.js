import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Auth from './Components/Auth';
import Authed from './Components/Authed';

import Login from './Components/Login';
import Register from './Components/Register';

import Home from './Components/Restaurants/Home';
import Restaurant from './Components/Restaurants/Restaurant';
import Create from './Components/Restaurants/Create';

function App() {
    return (
        <Routes>
            <Route element={<Authed/>}>
                <Route path='/login' element={<Login/>} />
                <Route path='/Register' element={<Register/>} />
            </Route>
            <Route path='/' element={<Auth/>}>
                <Route path='/' element={<Navigate to="/home"/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/restaurant' element={<Restaurant/>} />
                <Route path='/create' element={<Create/>} />
            </Route>
        </Routes>
    );
}

export default App;
