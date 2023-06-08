import{React, useState}  from 'react'
import '../Styles/login.css'
// import {Link, useNavigate  } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
// import Sidebar from './Sidebar'





export default function Login(props) {
    const [email, setEmail] = useState('');
    const[pass, setPass] = useState('');

    const navigate = useNavigate();
    function goToReg (){
        navigate('/reg')
    }
    function goTolayout (){
        navigate('/layout')
    }
  return (
    <section className ='login'>
        <div className ='smalldivision-login'>
            <div className ='col-1-login'>
                <div className ='log-into-acc'>
                   <h1 className='signin' > Login</h1>
                   <br/><br/>
                   <form className ='form-login'>
                   {/* onSubmit={haldleSubmit} */}
         
                    <input className='useremail' type='email' placeholder='valid email' value={email} required onChange={(e) => setEmail(e.target.value)}></input><br/><br/>
                    <input className='userpassword' type='password' placeholder='password' required value={pass} onChange={(e) => setPass(e.target.value)}></input><br/><br/>
                    <label>Choose Your Faculty:</label><br/>
                    <select className="faculty" aria-label=".form-select-sm example">
                    <option value="bsc.csit" id='1'>BSc.CSIT</option>
                    <option value="bca" id='2'>BCA</option>
                    </select>
                    <br/><br/>
                    <label>Choose Your Role:</label><br/>
                    <select className="Role" aria-label=".form-select-sm example">
                    <option value="teacher" id='1'>Teacher</option>
                    <option value="student" id='2'>Student</option>
                    <option value="admin" id= '3'>Admin</option>
                    </select>
                    <br/><br/>
                    <br/><br/>
                    <button  className="btn-1-login" onClick={goTolayout} >Submit</button>
                    </form>
                </div>
            </div>
            <div className='col-2-login'>
                <div className='wel-login'>
                    <h1>Welcome Back!</h1>
                    <span>Please <em> Sign In</em> to stay connected with us and our services.</span>
                </div> 
                <div className='no-acc'>
                <span>Don't have an account? &nbsp;</span> 
                <button className='btn-2-login' onClick={goToReg}> Register here</button>
                {/* onclick={navToReg()} */}
                </div>
            </div>
        </div>
    </section>
  )
}
