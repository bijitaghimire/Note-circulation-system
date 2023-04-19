import React from 'react'
import '../Styles/Allcourses.css'
import { DiReact, DiCss3Full } from "react-icons/di";
import { RxSketchLogo  } from "react-icons/rx";
import {FaLaravel, FaNodeJs} from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { AiOutlineHtml5,AiOutlineGithub } from "react-icons/ai";
import { SiAngularjs} from "react-icons/si";


export default function Allcourses() {
  return (
    <>
   <div className='courses'>
   <h1 className='page-title'>Allcourses</h1>
   <div className='column'>
   <div class="row1">
    <div class="r1-c1">
      <h3 className="course-title">HTML</h3>
      <br/>
      <span className='icon'><AiOutlineHtml5/></span>
      <br/><br/>
      <p>HTML stands for HyperText Markup Language. It is a standard markup language for web page creation. It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes</p><br/>
      <button className='viewmore'>View more</button>
    </div>
    <div class="r1-c2">
      <h3 className="course-title">Bootstrap</h3>
      <br/>
      <span className='icon'><BsBootstrap/></span>
      <br/><br/>
      <p>Bootstrap is a free, open source front-end development framework for the creation of websites and web apps. Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs.</p>
      <button className='viewmore'>View more</button>
    </div>
    <div class="r1-c3">
      <h3 className="course-title">CSS3</h3><br/>
      <span className='icon'><DiCss3Full/></span><br/><br/>
      <p>CSS3 is the latest version of the CSS specification. CSS3 adds several new styling features and improvements to enhance the web presentation capabilities.</p>
      <button className='viewmore'>View more</button>
    </div>
    </div>
    <div class="row2">
    <div class="r2-c1">
      <h3 className="course-title">Reactjs</h3><br/>
      <span className='icon'><DiReact/></span><br/><br/>
      <p>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components.</p>
      <button className='viewmore'>View more</button>
      </div>
    <div class="r2-c1">
      <h3 className="course-title">Angular</h3><br/>
      <span className='icon'><SiAngularjs/></span><br/><br/>
      <p>Angular is an open-source frontend framework. It is a JavaScript-based TypeScript development language that eliminates unneeded features and code to ensure lighter and faster applications.</p>
      <button className='viewmore'>View more</button>
    </div>
    <div class="r2-c1">
      <h3 className="course-title">NodeJS</h3><br/>
      <span className='icon'><FaNodeJs/></span><br/><br/>
      <p>Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment</p>
      <button className='viewmore'>View more</button>
    </div>
    </div>
    <div class="row3">
    <div class="r3-c1">
      <h3 className="course-title">Laravel</h3><br/>
      <span className='icon'><FaLaravel/></span><br/><br/>
      <p>Laravel is an open-source PHP framework, which is robust and easy to understand. It follows a model-view-controller design pattern. Laravel reuses the existing components of different frameworks which helps in creating a web application.</p>
      <button className='viewmore'>View more</button>
    </div>
    <div class="r3-c1">
      <h3 className="course-title">Sketch UIUX</h3><br/>
      <span className='icon'>< RxSketchLogo/></span><br/><br/>
      <p>A user interface sketch, or sketch , is a mock-up of a graphical user interface that you create while you design an application. You create sketches by adding drawing elements to the sketching editor</p>
      <button className='viewmore'>View more</button>
    </div>
    <div class="r3-c1">
      <h3 className="course-title">Git hub</h3><br/>
      <span className='icon'><AiOutlineGithub /></span><br/><br/>
      <p>Git is a distributed version control system, which means that the entire codebase and history is available on every developer’s computer, which allows for easy branching and merging.</p>
      <button className='viewmore'>View more</button>
    </div>
    </div>
   </div>
   </div>
  
   
    </>
  )
}
