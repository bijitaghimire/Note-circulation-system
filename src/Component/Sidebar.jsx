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
      component =<Profile/>      
      break;
      case '/logout':
        component =<Logout/>      
        break;
        // default:
        //   component=<Sdashboard/>
  }
 
  return (
    <>
      <div>
    <div className='sidebarr'>
    <div className='col-1 text-white p-5 m-10 w-auto  h-auto position-sticky'>
      <div className='sideitemrow'>
        <ul className=' '>
        {/* sidebar */}
        <div className='toplist m-'>
        <li className='sidebar-li'><a href='/layout/sdashboard'>Sdashboard</a></li>
        <li className='sidebar-li'><a href='/layout/tdashboard'>Teacherdashboard</a></li>
        <li className='sidebar-li'><a href='/layout/allcourses'>Allcourses</a></li>
        <li className='sidebar-li'><a href='/layout/allnotes'>Allnotes</a></li>
        <li className='sidebar-li'><a href='/layout/history'>History</a></li>

        <li className='sidebar-li' ><a href='/layout/profile'>Profile</a></li>
        <li className='sidebar-li'><a href='/layout/logout'>Logout</a></li>
        </div>
      </ul>
   
        </div>
    </div>
    </div>
    </div>
    <div>
      
    </div>
    
      {component}
    </>
     
  )
}

export default Sidebar;