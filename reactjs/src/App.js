import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import AuthHome from './Components/AuthHome';
import AuthLog from './Components/AuthLog';

import Login from './Components/Login';
import Register from './Components/Register';

import Home from './Components/Restaurants/Home';
import Restaurant from './Components/Restaurants/Restaurant';
import Create from './Components/Restaurants/Create';
import Edit from './Components/Restaurants/Edit';

function App() {
    return (
        <div className="h-screen w-screen bg-cover bg-scroll bg-[url('https://www.teahub.io/photos/full/13-135684_gallery-nice-wallpaper-hd-nice-wallpaper-hd-for.jpg')]">
            <Routes>
                <Route element={<AuthLog/>}>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/Register' element={<Register/>} />
                </Route>
                <Route path='/' element={<AuthHome/>}>
                    <Route path='/' element={<Navigate to="/home"/>} />
                    <Route path='/home' element={<Home/>} />
                    <Route path='/edit' element={<Edit id=""/>} />
                    <Route path='/restaurant' element={<Restaurant/>} />
                    <Route path='/create' element={<Create/>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
