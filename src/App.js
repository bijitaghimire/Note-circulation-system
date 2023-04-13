import {React, useState}  from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Allnotes from "./Pages/Allnotes";
import Allcourses from "./Pages/Allcourses";
import Setting from "./Pages/Setting";
import History from "./Pages/History";
import Sdashboard from "./Pages/Sdashboard";
import Logout from './Pages/Logout';

import './Styles/App.css';

import Sidebar from "./Component/Sidebar";
import Layout from './Component/Layout';

// import Login from './Component/Login'
// import Reg from './Component/Reg'

function App() {
  // const[currentForm, setCurrentForm]= useState("login")
  // const toggleForm =(formName)=>{
  //   setCurrentForm(formName);
  // }
  return (
    <>
    <Router>
      
      <Routes> 
          {/* <Route path = "/" element={<Login/>}/> */}
          <Route element={<Layout />} >
            <Route path = "/" element={<Sdashboard/>}/>
            <Route path = "/allnotes" element={<Allnotes/>}/>
            <Route path ="/allcourses"  element={<Allcourses/>}/>
            <Route path = "/history" element={<History/>}/>
            <Route path ="/setting"  element={<Setting/>}/>
            <Route path = "/logout" element={<Logout/>}/>
          </Route>

       </Routes>
      
    </Router>
{/* 
     <div className="App">
       {currentForm === "login"? <Login onFormSwitch ={toggleForm} /> : <Reg onFormSwitch ={toggleForm} />}
  
     </div> */}
    </>
   
  );
}

export default App;
