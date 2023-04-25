import React from 'react'
import '../Styles/Sdashboard.css';
// import { FaRegHeart } from "react-icons/fa";
import { AiOutlineDownload, AiOutlineUpload , AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import Rating from '../Component/Rating'

export default function Teacherdashboard() {
    const pophandle=()=>{
        alert("drag your pdf here")
    }
  return (
    <div className='sd-items m-5'>
      <div className='row-1-sd'>
        <h1 className='course-name'>Courses</h1>
        <div className='col-1--r1-sd'>
        <h3>Operating System</h3> <br/>
        <p>Operating system (OS) manages all of the software and hardware on the computer. It performs basic tasks such as file, memory and process management, handling input and output, and controlling peripheral devices such as disk drives and printers.</p>
        <span>Author Name:</span>
        <br/><br/>
        <div>
        <span className='download'><AiOutlineDownload/></span><span className='download'><AiOutlineDelete/></span><span className='download'><AiOutlineEdit/></span>
       <Rating/>
        </div>
        </div><br/>
        <div className='col-2--r1-sd'>
        <h3>Artificial Intellience.</h3>
        <p>Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.</p>
        <span>Author Name:</span>
        <br/><br/>
        <span className='download'><AiOutlineDownload/></span><span className='download'><AiOutlineDelete/></span><span className='download'><AiOutlineEdit/></span>
        <Rating/>
        <br/>
        </div>
        <div className='col-3--r1-sd'>
        <h3>Software engineering.</h3>
        <p>A software engineer is a person who applies the principles of software engineering to design, develop, maintain, test, and evaluate computer software..</p>
        <span>Author Name:</span>
        <br/><br/>
        <span className='download'><AiOutlineDownload/></span><span className='download'><AiOutlineDelete/></span><span className='download'><AiOutlineEdit/></span>
        <Rating/>
        </div>
      
        <br/>
      </div>
      <div className='row-2-sd'>
        <div className='col-1-r2-sd'>
        <span className='bold'>upload pdf.</span><br/>
        <button><h1 className='upload'onClick={pophandle}><AiOutlineUpload /></h1></button>
       
       

        </div>
        <div className='col-2-r2-sd'>
        <h3> Yours most viewed courses:</h3>
        <ul >
          <li>Data Science with Python</li>
          <li> Deep Learning</li>
          <li>Statistics</li>
        </ul>
        </div>
        <div className='col-3-r2-sd'>
        <h3>Your Students:</h3>
        <ul>
          <li>Hari Sharma</li>
          <li>Kedar Poudel</li>
          <li>Manoj bhattarai</li>
          <li>Hari Sharma</li>
        </ul>

        </div>
      </div>
    </div>
  )
}

