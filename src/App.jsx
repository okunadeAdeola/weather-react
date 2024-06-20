import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import DashBoard from './Component/DashBoard';
import Navbar from './Component/Navbar';
import NotFound from './Component/NotFound';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>  
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/dashboard" element={<DashBoard/>}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
    </Routes>
      
    </>
  );
}

export default App;
