import React from 'react'
// import { NavLink } from 'react-router-dom'
import Sdashboard from '../Pages/Sdashboard';
import Allcourses from '../Pages/Allcourses';
import Allnotes from '../Pages/Allnotes';
import Setting from '../Pages/Setting';
import History from '../Pages/History';
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
    case '/allcourses':
      component =<Allcourses/>      
      break;
    case '/allnotes':
      component =<Allnotes/>      
      break;
    case '/history':
      component =<History/>      
      break;
    case '/setting':
      component =<Setting/>      
      break;
      case '/logout':
        component =<Logout/>      
        break;
  }
 
  return (
    <>
      {/* <nav className='nav'> 
      {/* container */}

     <div className='col-1 '>
      <div className='row-1'>
        <ul className='list'>
        {/* sidebar */}
        <div className='toplist'>
        <li><a href='/sdashboard'>Sdashboard</a></li>
        <li><a href='/allcourses'>Allcourses</a></li>
        <li><a href='/allnotes'>Allnotes</a></li>
        <li><a href='/history'>History</a></li>
        </div>
        <div className='downlist'>
        <li><a href='/setting'>Setting</a></li>
        <li><a href='/logout'>Logout</a></li>
        </div>
      </ul>
   
        </div>
    </div>
      
    </>
     
  )
}

export default Sidebar;