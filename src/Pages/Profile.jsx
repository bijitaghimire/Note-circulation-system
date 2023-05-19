import React from 'react'
import '../Styles/profile.css'
import { useState } from 'react';

import {AiOutlineSetting, AiOutlineLogout} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg'
import {RiFeedbackLine} from 'react-icons/ri'
import {IoMdHelpCircleOutline} from 'react-icons/io';

// import PersonIcon from '@mui/icons-material/Person';
// import SettingsIcon from '@mui/icons-material/Settings';
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import LogoutIcon from '@mui/icons-material/Logout';

export default function Profile() {
  const[profileshow, setProfileShow]= useState(true)
  const[settingshow, setSettingShow]= useState()
  const[helpshow, setHelpShow]= useState()
  const[feedbackshow, setFeedbackShow]= useState()
  
 
  return (
    <>
      <div className="profile ">
      <h1 className='text-center m-5 '>Profile</h1>
     <div className='profile-items'>
     <ul className='text-center justify-content-center '>
      <label>profile information</label>
        <li className='p-3 '><button onClick={()=>setProfileShow(true)}> <span ><CgProfile/></span> <span className='fw-bold'>Profile information</span></button>
        profileshow?<h5>profile name</h5>
        <h5>phone number:</h5>
        <h56>email address:</h56>:null
        </li>
        <li className='p-3'><button><span ><CgProfile/></span> <span className='fw-bold'>Setting and privacy</span></button> 
        <h5>Edit name</h5>
        <h5> Edit phone number:</h5>
        <h56>Edit Email address:</h56>
        </li>
        <li className='p-3'> <span ><CgProfile/></span> <span className='fw-bold'>Help and Support</span>
        <h5>Edit name</h5>
        <h5> Edit phone number:</h5>
        <h56>Edit Email address:</h56></li>
        <li className='p-3'> <span ><CgProfile/></span> <span className='fw-bold'>Profile information
        <h5>Help Center</h5>
        <h5> Support inbox</h5>
        </span>
        </li>
        <li className='p-3'> <span ><CgProfile/></span> <span className='fw-bold'>Give feedback</span>
        <h5>Write feedback</h5>
        </li>
        <li className='p-3'> <span ><CgProfile/></span> <span className='fw-bold'>Log Out</span></li>
      </ul>
     </div>
      </div>
     
    </>
  )
}
