// import logo from './logo.svg';
// import './App.css';#
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './ui-collections/Home/home';
import Login from './ui-collections/Login/login';
import SignUp from './ui-collections/Signup/signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

