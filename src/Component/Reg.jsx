
import{React, useState}  from 'react'
import { useNavigate } from 'react-router-dom';
import  '../Styles/reg.css';
// import Login from './Login';

// import { useNavigate} from 'react-router-dom';
// import Button from '@material-ui/core/Button';
// import Reading from 'C:/Users/Acer/Desktop/7th sem/project/hamro-notes/src/assets/Reading.jpg'
// import Reading from '../assets/Reading.jpg'




 
export default function Registration(props) {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const[pass, setPass] = useState('');
  const[cpass, setConPass] = useState('');
  // const[batch, setBatch] = useState('');
  // const[faculty, setFaculty] = useState('');
  // const[number, setNumber] = useState('');
  // const[data,setData] =useState([])
 

  const navigate = useNavigate();
  function goToLogin() {
    navigate('/login');
  }

  const handleClick =(e)=>{
      e.preventDefault();
      const data={name, email}
       fetch("http://localhost:8080/user/department/{departmentId}/create",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
       }).then(()=>{
        
        alert("new student added")
       })

      // var email = document.form.email.value;
      //   var pass = document.form.pass.value;
      //   var conpass = document.form.cpass.value;
      //   console.log(email);
      //   var atposition=email.indexOf("@");  
      //   var dotposition=email.lastIndexOf(".");  
      //   if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
      //       alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
      //       return false;  
      //       }else if(pass.length<6){  
      //           alert("Password must be at least 6 characters long.");  
      //           return false;  
      //   }  
      //   if(pass===conpass){  
      //     return true;  
      //     }  
      //     else{  
      //     alert("password must be same!");  
      //     return false;  
      //     }  


      // const validateForm=()=>{
      //   var email = document.form.email.value;
      //   var pass = document.form.pass.value;
      //   var atposition=email.indexOf("@");  
      //   var dotposition=email.lastIndexOf(".");  
      //   if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
      //       alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
      //       return false;  
      //       }else if(pass.length<6){  
      //           alert("Password must be at least 6 characters long.");  
      //           return false;  
      //   }  
      //       } 
  }
  // useEffect(()=>{
  //   fetch("http://localhost:8080/user/department/{departmentId}/getAll")
  //   .then(res=>res.json())
  //   .then((result)=>{
  //     setData(result);
  //   })
  // },[])
  return (
   <>
    <section className='register'>
   
      <div className="row">
        <div className='smalldivision'>
          <div className='col-1'>
            <div className='wel'>
            <h1>Welcome guys!</h1>
            <br/>
          <p>Enter your personal details and start journey with us.</p>
            </div>
            <div className='acc-exist'>
              <p>Already have an account?&nbsp;<button className='btn-2'onClick={goToLogin} ><em>Sign In</em></button></p>
                     
            </div>
          </div>
          <div className='col-2'>
         <div className='create'>
         <h1 >Create Account </h1>
        <span >Register here.</span><br/><br/>
         </div>
        <form className='Form' >
        <input  type='text' placeholder='username' className='Username' value={name} onChange={(e) => setName(e.target.value)}></input><br/><br/>
        <input type='email' placeholder='useremail' className='Useremail' value={email} onChange={(e) => setEmail(e.target.value)}></input><br/><br/>
          <input type='password' placeholder='user password' className='Password' value={pass} onChange={(e) => setPass(e.target.value)}></input>
          <br/><br/>
          <input type='password' placeholder='confirm-password' className='Confirm-password' value={cpass} onChange={(e) => setConPass(e.target.value)}></input>
          <br/><br/>
          <input type='number' placeholder='Phone number' className='Phone'></input>
          <br/><br/>
          <input type='number' placeholder='batch' className='Batch'></input><br/><br/>
          
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
        <button  className="btn-1"
         onSubmit={handleClick}
         >Submit</button>
        </form>
          </div>
        </div>
      </div>
   </section>
   </>
  )
}
