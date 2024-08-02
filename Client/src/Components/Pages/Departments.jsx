import React from 'react'
import Project1 from './Project1'
import Project2 from './Project2'

function Departments() {
  return (
    <div>
      <div className='w-full h-20px my-4 text-center '>
      <h1 className='text-3xl font-Helvetica font-semibold p-2 text-[#012366]'>Forest</h1>
      </div>
      <Project1/>
      <div className='w-full h-20px my-4 text-center'>
      <h1 className='text-3xl font-Helvetica font-semibold p-2 text-[#012366]'>Water Resources</h1>
      </div>
      <Project2/>
    </div>
  )
}

export default Departments
