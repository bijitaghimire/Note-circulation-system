import React from 'react'
// import { NavLink } from 'react-router-dom'
import Sdashboard from '../Pages/Sdashboard';
import Teacherdashboard from '../Pages/Teacherdashboard';
import Allcourses from '../Pages/Allcourses';
import Allnotes from '../Pages/Allnotes';
import History from '../Pages/History';
import Profile from '../Pages/Profile';
import Logout from '../Pages/Logout';

import '../Styles/sidebar.css';

const Sidebar =() =>{
  
  let component
  switch (window.location.pathname) {
    case './':
      break;
    case '/sdashboard':
      component =<Sdashboard/>      
      break;
      case '/tdashboard':
      component =<Teacherdashboard/>      
      break;
    case '/allcourses':
      component =<Allcourses/>      
      break;
    case '/allnotes':
      component =<Allnotes/>      
      break;
    case '/history':
      component =<History/>      
      break;
    case '/profile':
      component =<profile/>      
      break;
      case '/logout':
        component =<Logout/>      
        break;
  }
 
  return (
    <>
      {/* <nav className='nav'> 
      {/* container */}

     <div className='col-1 text-white p-6 w-auto  h-auto position-sticky'>
      <div className='row'>
        <ul className=' '>
        {/* sidebar */}
        <div className='toplist m-5'>
        <li ><a href='/sdashboard'>Sdashboard</a></li>
        <li><a href='/tdashboard'>Teacherdashboard</a></li>
        <li><a href='/allcourses'>Allcourses</a></li>
        <li><a href='/allnotes'>Allnotes</a></li>
        <li><a href='/history'>History</a></li>

        <li><a href='/profile'>Profile</a></li>
        <li><a href='/logout'>Logout</a></li>
        </div>
      </ul>
   
        </div>
    </div>
      
    </>
     
  )
}

export default Sidebar;