import logo from './logo.svg';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import Auth from './components/Auth'
import AuthContextProvider from './contexts/AuthContext'


function App() {
  return (
      <div>
      <h1>tran ngoc</h1>
      
      {/* // <Routes>
      //   <Route path ='/' element ={<Auth/>} >
      //     <Route path='/' element={<Navigate to="/login" />} />
      //     <Route path='/login' element={<Login />}/>
      //     <Route path='/register' element={<Register />}/>
      //   </Route>
      // </Routes> */}
      
    </div>
  )
}

export default App;
