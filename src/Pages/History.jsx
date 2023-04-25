import React from 'react'
import '../Styles/History.css'

export default function History() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <>
    <h1 className='  block p-5 m-10'> Watched history</h1>
    
      <div className='records'>
      <div className=" d-flex p-2 " >
        <ul>
          <li className='rec border-start-2 bg-white m-3 p-4 ' >
            <div className='p-10 d-flex align-items-center justify-content-between gap-4'>
              <strong> {date} </strong>
              <h3>Artifical intelligence</h3>
            </div>
            <div>
              Aurthor: Ram sharma 
            </div>
          </li> 
          <li className=' rec border-start-2 bg-white m-3 p-4' >
            <div className='p-10 d-flex align-items-center justify-content-between gap-4'>
              <strong> {date} </strong>
              <h3 className=' Se 3px'>Software Engineering</h3>
            </div>
            <div>
              Aurthor: Ram sharma 
            </div>
          </li> 
          <li className=' rec border-start-2 bg-white m-3 p-4' >
            <div className='  p-10 d-flex align-items-center justify-content-between gap-4'>
              <strong> {date} </strong>
              <h3 className=' Os 2px'>Operating System</h3>
            </div>
            <div>
              Aurthor: Ram sharma 
            </div>
          </li> 
          <li className=' rec border-start-2 bg-white m-3 p-4' >
            <div className='p-10 d-flex align-items-center justify-content-between gap-4'>
              <strong> {date} </strong>
              <h3 className=' Ai 2px'>Artifical intelligence</h3>
            </div>
            <div>
              Aurthor: Dev khadka
            </div>
          </li> 
          <li className=' rec border-start-2 bg-white m-3 p-4' >
            <div className='p-10 d-flex align-items-center justify-content-between gap-4'>
              <strong> {date} </strong>
              <h3 className='Ai'>Artifical intelligence</h3>
            </div>
            <div>
              Aurthor: samip dhakal 
            </div>
          </li> 
          <li className=' rec border-start-2 bg-white m-3 p-4' >
            <div className='p-10 d-flex align-items-center justify-content-between gap-4'>
              <strong> {date} </strong>
              <h3 className='Ai'>Artifical intelligence</h3>
            </div>
            <div>
              Aurthor: hari sharma 
            </div>
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
