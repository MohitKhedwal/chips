import React, { useEffect, useState } from 'react';
import { RiBuilding2Fill } from "react-icons/ri";
import Image from '../../../images/sl1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/isloggedin';
import { useNavigate } from 'react-router-dom';
// import './Dashboard.css';


function Admindashboard() {

  const [nameValue,setnameValue]=useState()
  const id=useSelector(state=>state.logstatus.user)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout()); // Clear the user session in Redux
    setTimeout(() => {
      navigate('/'); // Redirect to the login page
      window.location.reload(); // Refresh the page
    }, 100); // Small delay to ensure Redux state is updated
  };
    
  useEffect(()=>{
    const load = async () => {
      try {
        const body = { id };
        const result = await fetch("http://localhost:5000/api/get-name", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const res= await result.json()
        console.log(res);
        setnameValue(res)
      } catch (error) {
        console.error("Error fetching role data:", error);
      }
    };
    load()

  } ,[])
  return (
    <div className="flex h-screen">
      <nav className="w-1/6 bg-gray-100 text-[#012366] p-4 border-r border-r-[#012366]">
        <ul className="space-y-4">
          <li className="font-bold text-lg">Welcome {nameValue}</li>
         
          <li className="hover:bg-[#012366] font-semibold hover:text-white p-2 rounded-md" onClick={handleLogout} >Logout</li>
        </ul>
      </nav>

      <div className="w-5/6 p-4 bg-gray-100">
      <div className='mb-2 pb-4 '>
      <img className='rounded-lg shadow-lg' src={Image} alt="Header Image" />
      </div>
      {/* <div className="marquee-container">
        <div className="marquee"> */}
        <div className="grid grid-cols-3 gap-8 m-2">
          <a href='#'>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900">
            <h2 className="text-xl text-[#012366] font-bold mb-2"><RiBuilding2Fill />Dept 1</h2>
            {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
          </div>
          </a>

          <a href='#'>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900">
            <h2 className="text-xl text-[#012366] font-bold mb-2"><RiBuilding2Fill />Dept 2</h2>
            {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
          </div>
          </a>

          <a href='#'>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900">
            <h2 className="text-xl text-[#012366] font-bold mb-2"><RiBuilding2Fill />Dept 3</h2>
            {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
          </div>
          </a>

          <a href='#'>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900">
            <h2 className="text-xl text-[#012366] font-bold mb-2"><RiBuilding2Fill />Dept 4</h2>
            {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
          </div>
          </a>

          <a href='#'>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900">
            <h2 className="text-xl text-[#012366] font-bold mb-2"><RiBuilding2Fill />Dept 5</h2>
            {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
          </div>
          </a>

          <a href='#'>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900">
            <h2 className="text-xl text-[#012366] font-bold mb-2"><RiBuilding2Fill />Dept 6</h2>
            {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
          </div>
          </a>

        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
}

export default Admindashboard
