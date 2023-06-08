import React from 'react'
import '../Styles/allnotes.css'

export default function Allnotes() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <>
     
    <div className='allnotes'>
    <h1 className='p-10  mt-20 text-center block'> My Notes</h1>
      <div className='container text-center mt-20 '>
      
      <div class="row row-cols-4 m-3 p-10" >
       <div className='notes-items'><h4>Artificial intelligence</h4>
       <span>Date of upload:{date}</span>
       <p>Aurthor:</p>
       <button className='view'>View</button>
       </div>
       <div className='notes-items'><h4>Operating System</h4>
       <span>Date of upload:{date}</span>
       <p>Aurthor:</p>
       <button className='view'>View</button>
       </div>
       <div className='notes-items'><h4>Digital Logic</h4>
       <span>Date of upload:{date}</span>
       <p>Aurthor:</p>
       <button className='view'>View</button>
       </div>
       <div className='notes-items'><h4>Artificial intelligence</h4>
       <span>Date of upload:{date}</span>
       <p>Aurthor:</p>
       <button className='view'>View</button>
       </div>
       <div className='notes-items'><h4>Artificial Intelligence</h4>
       <span>Date of upload:{date}</span>
       <p>Aurthor:</p>
       <button className='view'>View</button>
       </div>
       <div className='notes-items'><h4>Python</h4>
       <span>Date of upload:{date}</span>
       <p>Aurthor:</p>
       <button className='view'>View</button>
       </div>
       <div className='notes-items'><h4>React js</h4>
       <span>Date of upload:{date}</span>
       <p>Aurthor:</p>
       <button className='view'>View</button>
       </div>
       <div className='notes-items'><h4>Artificial intelligence</h4>
       <span>Date of upload:{date}</span>
       <p>Aurthor:</p>
       <button className='view'>View</button>
       </div>
       <div className='notes-items'><h4>Computer Network</h4>
       <span>Date of upload:{date}</span>
       <p>Aurthor:</p>
       <button className='view'>View</button>
       </div>
       <div className='notes-items'><h4>Digital Logic</h4>
       <span>Date of upload:{date}</span>
       <p>Aurthor:</p>
       <button className='view'>View</button>
       </div>
       <div className='notes-items'><h4>TOC</h4>
       <span>Date of upload:{date}</span>
       <p>Aurthor:</p>
       <button className='view'>View</button>
       </div><div className='notes-items'><h4>Artificial intelligence</h4>
       <span>Date of upload:{date}</span>
       <p>Aurthor:</p>
       <button className='view'>View</button>
       </div>
      </div>
      </div>
    </div>
    </>
  )
}
