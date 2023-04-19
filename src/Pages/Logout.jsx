import React from 'react'

export default function Logout() {
  return (
    <div className=''>
    <h1 className=' text-center block mb-8 '>Logout page</h1>
    <div className='d-flex justify-content-center mt-20'>
      <div className='p-8 border border-1  '>
        <div className='p-8'>Are you sure you want to logout?</div>
        <div>
          <button className='m-5'> Yes</button>
           <button> No </button>
        </div>
      </div>
    </div>
    </div>
    
  )
}
