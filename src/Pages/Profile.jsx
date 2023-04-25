import React from 'react'
import {AiOutlineDown} from 'react-icons/ai';

export default function Profile() {
  return (
    <>
    <div className='records'>
    <h1 className='text-center'>Profile</h1>
      <div className=" d-flex p-2 bd-highlight " >
        <ul> 
          <li className='bg-white' >
            <div className='p-10 d-flex align-items-center justify-content-between gap-4'>
              <h3 className=' Se 3px'> My Profile </h3>
            </div>
          </li> 
          <li className=' border-start-2 bg-white' >
            <div className='p-10 d-flex align-items-center justify-content-between gap-4'>
              <h3 className=''>Personal information</h3>
            </div>
          </li> 
          <li className=' border-start-2 bg-white' >
            <div className='p-10 d-flex align-items-center justify-content-between gap-4'>
              <h3 className=' Ai 2px'>Help and Support</h3>
            </div>
          </li> 
          <li className=' border-start-2 bg-white' >
            <div className='p-10 d-flex align-items-center justify-content-between gap-4'>
              <h3 className='Ai'></h3>
            </div>
            <li className=' border-start-2 bg-white' >
            <div className='p-10 d-flex align-items-center justify-content-between gap-4 on'>
              <button className='setting'></button>
            </div>
          </li>
          </li> 
          <li className=' border-start-2 bg-white' >
            <div className='p-10 d-flex align-items-center justify-content-between gap-4'>
              <button className='Ai'>Log Out</button>
            </div>
          </li> 
          
              </ul>
    </div>
      </div>
     
    </>
  )
}
