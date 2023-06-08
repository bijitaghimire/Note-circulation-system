import React from 'react';
import '../Styles/Landing.css';
import myImage from '../Images/home.avif'


export default function Landing() {
  return (
    <>
  
        <div className=''>
        <div class="topnav">
        <a class="active" href="/">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <div class="topnav-right">
            <button><a href="/reg">Sign Up</a></button>
            <button><a href="/login">Login</a></button>   
        </div>
        </div>
        <div className="landingimg">
       <img  className='image' src={myImage} alt="" />
       <h1 className='text'>Let's build the career together.<br/> we are here to help!</h1>
        
       </div>
        <div>
         
        </div>
          
         </div>
         
   
    </>
 )   
}
