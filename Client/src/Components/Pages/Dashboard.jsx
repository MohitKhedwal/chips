import React, { useEffect, useState } from 'react'
// import { useMyContext } from '../Container/Context';
import { useMyContext } from '../Container/Context';
import Admindashboard from './Dashboardcomponents.jsx/Admindashboard';
import UserDashboard from './Dashboardcomponents.jsx/UserDashboard';
import { useSelector } from 'react-redux';
const  Dashboard=()=> {
  
  const [roleValue,setroleValue]=useState()
  const id=useSelector(state=>state.logstatus.user)
    
  useEffect(()=>{
    const load = async () => {
      try {
        const body = { id };
        const result = await fetch("http://localhost:5000/api/get-role", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const res= await result.json()
        console.log(res);
        setroleValue(res)
      } catch (error) {
        console.error("Error fetching role data:", error);
      }
    };
    load()

  } ,[])

console.log(roleValue)

 
  console.log(id)
  



if(roleValue==1){
  return (
    <>
    <div className='h-screen w-full flex'>
    <Admindashboard/>
    </div>
   
    </>
    
  )
}

else if(roleValue>=2 || roleValue<=6){
  return (
    <>
    <div className='h-screen w-full'>
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
