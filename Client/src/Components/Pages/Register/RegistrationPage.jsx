import React from 'react';
import Register from './Register';
import logo from '../../../images/logo1.png';
import RegisterBg from '../../../images/RegisterBg.png';

export default function RegistrationPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <div className="flex flex-1">
        <div className="w-1/3 mt-8 bg-white flex flex-col justify-center items-center">
          <img src={logo} alt="Logo" className="mb-2 mt-2 w-32 object-contain" />
          <b className="text-black text-2xl mb-4">Welcome to CH𝓲PS GIS Portal!</b>
          <p className="text-gray-400 text-2xl font-bold mb-4">Register here!</p>
          <div className="w-10/12 mb-4 mt-2 ">
            <Register />
          </div>
        </div>
        <div className="w-2/3 bg-green-200 flex justify-center items-center bg-cover" style={{ backgroundImage: `url(${RegisterBg})` }}>
        </div>
      </div>
    </div>
  );
}
