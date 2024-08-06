import React, { useEffect } from 'react'
// import { useMyContext } from '../Container/Context';
import { useMyContext } from '../Container/Context';
import Admindashboard from './Dashboardcomponents.jsx/Admindashboard';
const  Dashboard=()=> {
  
  const {roleValue,setroleValue}=useMyContext()
    const load=()=>{
      
    console.log(roleValue);
    }
  useEffect(()=>{

  } ,[])

  console.log(roleValue,"rolevalue")


if(roleValue==1){
  return (
    <>
    <div className='h-screen w-full flex    justify-center  items-center'>
    1
    </div>
   
    </>
    
  )
}
else if(roleValue==2){
  return (
    <>
    <div className='h-screen w-full flex    justify-center  items-center'>
    <Admindashboard/>
    </div>
   
    </>
    
    )
}
else if(roleValue==3){
  return (
    <>
    <div className='h-screen w-full flex    justify-center  items-center'>
    3
    </div>
   
    </>
    
  )
}else{
  return (
    <>
    Role undefined
    </>
  )
}
}

export default Dashboard
