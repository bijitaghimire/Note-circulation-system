import React from 'react'

export default function History() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <>
    <h1 className='  block p-5 m-10'> Watched history</h1>
    
      <div className='records'>
      <div className=" d-flex p-2 bd-highlight " >
        <ul>
          <li className=' border-start-2 bg-white' >
            <div className='p-10 d-flex align-items-center justify-content-between gap-4'>
              <strong> {date} </strong>
              <h3>Artifical intelligence</h3>
            </div>
            <div>
              Aurthor: Ram sharma 
            </div>
          </li> 
          <li className=' border-start-2 bg-white' >
            <div className='p-10 d-flex align-items-center justify-content-between gap-4'>
              <strong> {date} </strong>
              <h3>Artifical intelligence</h3>
            </div>
            <div>
              Aurthor: Ram sharma 
            </div>
          </li> 
          <li className=' border-start-2 bg-white' >
            <div className='p-10 d-flex align-items-center justify-content-between gap-4'>
              <strong> {date} </strong>
              <h3>Artifical intelligence</h3>
            </div>
            <div>
              Aurthor: Ram sharma 
            </div>
          </li> 
          <li className=' border-start-2 bg-white' >
            <div className='p-10 d-flex align-items-center justify-content-between gap-4'>
              <strong> {date} </strong>
              <h3>Artifical intelligence</h3>
            </div>
            <div>
              Aurthor: Ram sharma 
            </div>
          </li> 
          <li className=' border-start-2 bg-white' >
            <div className='p-10 d-flex align-items-center justify-content-between gap-4'>
              <strong> {date} </strong>
              <h3>Artifical intelligence</h3>
            </div>
            <div>
              Aurthor: Ram sharma 
            </div>
          </li> 
          <li className=' border-start-2 bg-white' >
            <div className='p-10 d-flex align-items-center justify-content-between gap-4'>
              <strong> {date} </strong>
              <h3>Artifical intelligence</h3>
            </div>
            <div>
              Aurthor: Ram sharma 
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
