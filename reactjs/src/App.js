import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Login from './Components/Login';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="/Login"/>} />
            <Route path='/Login' element={<Login/>} />
        </Routes>
    );
}

export default App;
