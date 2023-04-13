import{React, useEffect, useState}  from 'react'
import '../Styles/login.css'
// import {Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import Sidebar from './Sidebar'





export default function Login(props) {
    const [email, setEmail] = useState('');
    const[pass, setPass] = useState('');
    // const navigate = useNavigate();
//   const logindata =() =>{
//     const userRef = useRef();
//     const errRef = useRef();
 
//    const [email, setEmail] = useState('');
//    const[validEmail, setValidEmail] = useState(false);
//     const[emlFocus, setEmlFocus] = useState(false);
 
//    const[pass, setPass] = useState('');
//    const[validPass, setValidPass] = useState(false);
//     const[passFocus, setPasFocus] = useState(false);

//     const[conpass, setConPass] = useState('');
//    const[validConPass, setValidConPass] = useState(false);
//     const[conpassFocus, setConPassFocus] = useState(false);
// // pwd =pass conpass mathpwd
//      const[errMsg, setErrMsg] = useState('');
//      const[success, setSuccess] = useState(false);

//      useEffect(()=>{
//         userRef.current.focus();
//      },[])
//      useEffect(()=>{
//         const result = USER_REGEX.test(user);
//         console.log(result);
//         console.log(user);
//         setValidEmail(result);
//      }, [user])

//      useEffect(()=>{
//         const result = USER_REGEX.test(user);
//         console.log(result);
//         console.log(pass);
//         setValidEmail(result);
//         const con = pwd === conf
//      }, [user])
//   }

//   const[cpass, setConPass] = useState('');
//   const[validConPass, setValidConPass] = useState(false);
//    const[conpasFocus, setConPassFocus] = useState(false);

   
    // const[authenticated, setAuthenticated]=useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    // const user=[{username:"", pass:""}]
    
    // const haldleSubmit =(e)=>{
    //     e.preventDefault();
    //     navigate("/Sidebar")
        // console.log(email,pass);    
        // window.location.href = 'http://localhost:3002/tdasboard'
        // redirect("/sidebaritems")
        // if(email && pass ===  true){ //after connecting database.
        //     localStorage.setItem("authenticated", true);
        //     
        // }
       
   const handleClick=()=>{
    // navigate("/Sidebar.jsx")
   }
    
    // }
  return (
    <section className ='login'>
        <div className ='smalldivision-login'>
            <div className ='col-1-login'>
                <div className ='log-into-acc'>
                   <h1 className='signin' > Sign In</h1>
                   <br/><br/>
                   <form className ='form-login'>
                   {/* onSubmit={haldleSubmit} */}
         
                    <input className='useremail' type='email' placeholder='valid email' value={email} required onChange={(e) => setEmail(e.target.value)}></input><br/><br/>
                    <input className='userpassword' type='password' placeholder='password' required value={pass} onChange={(e) => setPass(e.target.value)}></input><br/><br/>
                    <label required>Choose Your Faculty:</label><br/>
                    <select className='faculty'>
                        <option value='BSc.CSIT' >BSc.CSIT</option>
                        <option value='BIT' >BIT</option>
                    </select>
                    <br/><br/>
                    <label required>Choose Your Role:</label><br/>
                    <select className='role'>
                        <option value='teacher' >Teacher</option>
                        <option value='ea' >Student</option>
                        <option value='admin'>Admin</option>
                    </select>
                    <br/><br/>
                    <button  className="btn-1-login" onClick={handleClick} >Submit</button>
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
                <button className='btn-2-login' onClick={() =>props.onFormSwitch ('registration')}> Register here</button>
                {/* onclick={navToReg()} */}
                </div>
            </div>
        </div>
    </section>
  )
}
