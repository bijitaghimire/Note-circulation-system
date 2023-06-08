import React from 'react'
import '../Styles/History.css'

export default function History() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <>
    <div className='records'>
    <h1 className='p-10  mt-20 text-center block'> Watched history</h1>
      <div className=" d-flex " >
        <ul>
        <li className='history-list'>
        <h3 className='history-sub'>Artificial Intelligence</h3>
          <p>Aurthor name: </p>
          <span><strong>{date}</strong></span>
        </li>
        <li className='history-list'>
        <h3 className='history-sub'>Artificial Intelligence</h3>
          <p>Aurthor name: </p>
          <span><strong>{date}</strong></span>
        </li>
        <li className='history-list'>
        <h3 className='history-sub'>Artificial Intelligence</h3>
          <p>Aurthor name: </p>
          <span><strong>{date}</strong></span>
        </li>
        <li className='history-list'>
        <h3 className='history-sub'>Artificial Intelligence</h3>
          <p>Aurthor name: </p>
          <span><strong>{date}</strong></span>
        </li>
        <li className='history-list'>
        <h3 className='history-sub'>Artificial Intelligence</h3>
          <p>Aurthor name: </p>
          <span><strong>{date}</strong></span>
        </li>
        </ul>
    </div>
      </div>
{/* <h3 className='text-left'>This is my histiry </h3>
<ul>
          <li className=' border border-left-2 bg-white text-start' >
            <span><strong> {date} </strong><h3>Artifical intelligence</h3>Aurthor: Ram sharma </span></li> 
              </ul> */}
    
    </>
    )
}
