import React, { useEffect } from 'react'
// import { useMyContext } from '../Container/Context';
import { useMyContext } from '../Container/Context';
import Admindashboard from './Dashboardcomponents.jsx/Admindashboard';
import UserDashboard from './Dashboardcomponents.jsx/UserDashboard';
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
    <Admindashboard/>
    </div>
   
    </>
    
  )
}

else if(roleValue>=2 || roleValue<=6){
  return (
    <>
    <div className='h-screen w-full flex    justify-center  items-center'>
   <UserDashboard/>
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
