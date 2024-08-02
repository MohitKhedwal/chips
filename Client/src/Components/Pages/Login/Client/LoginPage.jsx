import React from 'react';
import Login from './Login';
import logo from '../../../../images/logo1.png'
import loginbg from '../../../../images/Loginbg.png'

export default function LoginPage({changeAuth}) {
  return (
    <div className="flex h-screen font-sans">
      <div className="w-1/3 bg-white flex flex-col justify-center items-center">
      <img src={logo} alt="Logo" className="mb-4 w-32 h-32 object-contain" />
        <b className='text-black text-2xl mb-4'>Welcome to CH𝓲PS GIS!</b>
        <p className='text-gray-400 text-2xl font-bold mb-8'>Log In</p>
        <div className='w-10/12'>
          <Login changeAuth={changeAuth} />
        </div>
      </div>
      <div className="w-2/3 bg-green-200 flex justify-center items-center bg-cover" style={{ backgroundImage: `url(${loginbg})` }}>
        {/* Alternatively, you can use an img tag if you prefer */}
        {/* <img src="path/to/your/image.jpg" alt="Background" className="object-cover h-full w-full" /> */}
      </div>
    </div>
  );
}

