import React from 'react';
import '../Styles/Landing.css';
import home from '../Images/home.avif';


export default function Landing() {
  return (
    <>
  
        <div className='home'>
        <div class="topnav">
        <a class="active" href="/">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#search">Search</a>
        <a href="#about">About</a>
        <div class="topnav-right">
            <button><a href="/reg">Sign Up</a></button>
            <button><a href="/login">Login</a></button>   
        </div>
        </div>
        <div>
         <h1 className='text'>Let's build the career together.</h1>
         <h3 className>We are always on your help!</h3>
         
        </div>
          
         </div>
         
   
    </>
 )   
}
