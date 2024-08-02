import React from 'react';
import { FaAtlas } from "react-icons/fa";
import { IoMap } from "react-icons/io5";
import { FaMapPin } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import { GrCircleInformation } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { NavLink,Link } from 'react-router-dom';
import logo from "../../images/logo.ico"

function Navbar() {
  return (
    <nav className="p-4 min-h-4 pb-2 flex justify-between items-center px-1 text-sm font-medium bg-white border-b-1 border-[#728775] shadow-lg">
      <a href='#'> 
        <div className="flex items-center ">
        <div className="h-10 w-32 ml-3 mb-3 pl-2 bg-cover bg-no-repeat bg-center navlogo" alt="CG-Govt-Logo" >
        <img src={logo} alt="" className='w-[80%] ' />
        </div>
          <div className="flex flex-col space-y-1  ml-8">
            <span className="text-2xl font-semibold  mr-2 mb-0 text-black hover:text-[#012366] "> Chhattisgarh Center of Geo-Information (CGCOG)</span>
            {/* <span className="  text-sm mt-0 text-[#FF00FF]"></span> */}
          </div>
        </div>
        </a>
      <ul className=" font-semibold flex  space-x-5 mr-3">
        <li>
         <NavLink to="/" className="flex items-center hover:text-[#012366]" > <IoHome className="mr-2 text-lg" />Home</NavLink>
         {/* <a href="#" className="flex items-center hover:text-[#FF00FF]" >
            <AiFillHome className="mr-2 text-lg" />
            Home
          </a> */}
        </li>
        <li>
            <NavLink to="/about-us" className="flex items-center hover:text-[#012366]" >
            <GrCircleInformation className="mr-2 text-lg" />
            About Us

            </NavLink>
          {/* <a href="#" className="flex items-center hover:text-[#FF00FF]">
            <IoIosInformationCircle className="mr-2 text-lg" />
            About Us
          </a> */}
        </li>
        <li>
            <NavLink className="flex items-center hover:text-[#012366]" to="/departments" >
              <FaBuilding className="mr-2 text-lg" color='red-900' />
            Departments</NavLink>
          {/* <a href="#" className="flex items-center hover:text-[#FF00FF]">
            <PiNotePencilFill  className="mr-2 text-lg" />
            Projects
          </a> */}
        </li>
        <li>
            <NavLink  className="flex items-center hover:text-[#012366]" to="/data" >
            <AiFillDatabase className="mr-2 text-lg" />
            Data

            </NavLink>
          {/* <a href="#" className="flex items-center hover:text-[#FF00FF]">
            <FaDatalg className="mr-2 text-lg" />
            Data
          </a> */}
        </li>
        <li>
          <NavLink className="flex items-center hover:text-[#012366]" to="/stategis">
          <IoMap  className="mr-2 text-lg" />
            CG GIS
          </NavLink>

          {/* <a href="#" className="flex items-center hover:text-[#FF00FF]">
            <IoLocationSharp className="mr-2 text-lg" />
            CG GIS
          </a> */}
        </li>
        <li>
            <NavLink className="flex items-center hover:text-[#012366]" to="/login" >
            <FaMapPin  className="mr-2 text-lg" />
            District GIS
            </NavLink>
          {/* <a href="#" className="flex items-center hover:text-[#FF00FF]">
            <IoLocationSharp className="mr-2 text-lg" />
            District GIS
          </a> */}
        </li>
        <li>
            <NavLink className="flex items-center hover:text-[#012366]" to="/cgatlas" >
            <FaAtlas className="mr-2 text-lg" />
            CG Atlas

            </NavLink>
          {/* <a href="#" className="flex items-center hover:text-[#FF00FF]">
            <MdContactPhone className="mr-2 text-lg" />
            Contact Us
          </a> */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
