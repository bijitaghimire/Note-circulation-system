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
  const[profileshow, setProfileShow]= useState(true);
  const[settingshow, setSettingShow]= useState();
  const[helpshow, setHelpShow]= useState();
  const[feedbackshow, setFeedbackShow]= useState();
  const[logout, setLogOut]= useState();
   
  const toggleProfileShow = () => {
    setProfileShow(!profileshow);
  };
  const toggleSettingShow = () => {
    setSettingShow(!settingshow);
  };
  const toggleHelpShow = () => {
    setHelpShow(!helpshow);
  };
  const toggleFeedbackShow= () => {
    setFeedbackShow(!feedbackshow);
  };
  const toggleLogOut= () => {
    setLogOut(!logout);
  };
  
  function editprofileFunction(){
    let previouspass = prompt(" enter your previous password:");
    let newpass = prompt(" enter your new password:");

  }
  function changeBackgroundcolor (){
    document.getElementById("backgroung-change").style.backgroundColor = "lightblue";
  }
 
  return (
    <>
      <div className="profile ">
      <h1 className='profile-title '>Profile</h1>
     <div className='profile-items'>
     <ul className='text-left justify-content-center '>
     
        <li className='p-2 '><button onClick={toggleProfileShow}> <h4 className='fw-bold'>Profile information</h4></button>
        { profileshow && (
        <div>
          {/* Place your sub-elements here */}
          <button onClick="editprofileFunction()">edit profile picture</button><br/><br/>
          <button className='backgroung-change' onClick="changeBackgroundcolor()">change background color</button><br/><br/>
          <button>Edit Email address</button><br/><br/>
        </div>
      )}
      <button>edit profile name</button>
        </li>
        <li className='p-2'><button onClick={toggleSettingShow}> <h4 className='fw-bold'>Setting and privacy</h4></button> 
        { settingshow && (
        <div>
          {/* Place your sub-elements here */}
          <button className='sub-button'>edit </button><br/><br/>
          <button className='sub-button'>Edit </button><br/><br/>
          <button className='sub-button'>Edit </button><br/><br/>
        </div>
      )}
        </li>
        <li className='p-2'><button onClick={toggleHelpShow}><h4 className='fw-bold'>Help and Support</h4></button> 
        { helpshow && (
        <div>
          {/* Place your sub-elements here */}
          <button className='sub-button'>Edit </button><br/><br/>
          <button className='sub-button'>Edit </button><br/><br/>
        </div>
      )}
        </li>
        <li className='p-2'><button onClick={toggleFeedbackShow}> <h4 className='fw-bold'>Give Feedback</h4></button> 
        { feedbackshow && (
        <div>
          {/* Place your sub-elements here */}
          <button className='sub-button'>Write Feedback</button><br/><br/>
        </div>
      )}
        </li>
        <li className='p-2'><button onClick={toggleLogOut}><h4 className='fw-bold'>Log Out</h4></button> 
        { logout && (
        <div>
          {/* Place your sub-elements here */}
          <button></button>
          
        </div>
      )}
        </li>
      </ul>
     </div>
      </div>
     
    </>
  )
}
