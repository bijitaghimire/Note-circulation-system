// import {React, useState}  from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Allnotes from "./Pages/Allnotes";
import Allcourses from "./Pages/Allcourses";
import Profile from './Pages/Profile';
import History from "./Pages/History";
import Sdashboard from "./Pages/Sdashboard";
import Teacherdashboard from './Pages/Teacherdashboard';
import Logout from './Pages/Logout';

import './Styles/App.css';


import Layout from './Component/Layout';

import Login from './Component/Login'
import Registration from './Component/Reg';


function App() {
  return (
    <>
    <Router>
      
      <Routes> 
          {/* <Route path = "/" element={<Login/>}/> */}
          <Route path = "/login" element={<Login/>}/>
          <Route path='/reg' element={<Registration/>}/>
          <Route path='/' element={<Layout/>} > 
            <Route path = "/" element={<Sdashboard/>}/>
            <Route path = "/sdashboard" element={<Sdashboard/>}/>
            <Route path = "/tdashboard" element={<Teacherdashboard/>}/>
            <Route path = "/allnotes" element={<Allnotes/>}/>
            <Route path ="/allcourses"  element={<Allcourses/>}/>
            <Route path = "/history" element={<History/>}/>
            <Route path ="/profile"  element={<Profile/>}/>
            <Route path = "/logout" element={<Logout/>}/>
           </Route> 

       </Routes>
    </Router>
    </>
  
  );
}

export default App;
