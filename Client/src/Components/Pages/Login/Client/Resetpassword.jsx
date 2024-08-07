// import React, { useState } from 'react'

// function Forgotpassword () {
//     const [email,setEmail]=useState();
//     const handleSubmit= async (e)=>{
//         e.preventDefault();
//         try {
//             const body={email}
//              const res=await fetch("http://localhost:5000/api/forgot-password",{
//                 method:"POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(body),
//              })
//              const parseRes = await res.json();
            
        
//             } catch (error) {
//               console.error(error)
            
//         }
//     }
//   return (
//     <form className="flex flex-col items-center space-y-4 font-sans h-screen" onSubmit={handleSubmit}>
//     <div className="w-1/4 mx-auto px-8 mt-5">
//       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//         Email:
//       </label>
//       <input
//         id="email"
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={e=>setEmail(e.target.value)}
//         name="email"
//         required
//         className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:border-[#67a160] focus:outline-none"
//       />
//     </div>
    
//     <div className="w-1/4 mx-auto mb-10 px-8">
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white py-2 mb-2 rounded-lg hover:bg-[#67a160] focus:outline-none"
//       >
//         Send
//       </button>
//     </div>
//   </form>
//   )
// }

// export default Forgotpassword

import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Resetpassword() {
    const [password, setpassword] = useState();
    const [confirmPassword,setConfirmPassword]=useState();
    const navigate = useNavigate();
    const {user_id,token}=useParams()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            // setError('Passwords do not match');
            alert("Passwords does not match")
            return;
          }
        try {
            const body = { password  };
            const res = await fetch(`http://localhost:5000/api/reset-password/${user_id}/${token}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            alert("Password UPDATED Successfully")
           
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        <form className="flex flex-col items-center space-y-4 font-sans h-screen" onSubmit={handleSubmit}>
            <div className="w-1/4 mx-auto px-8 mt-5">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Reset Password
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="Enter your email"
                    value={password}
                    onChange={e => setpassword(e.target.value)}
                    name="password"
                    required
                    className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:border-[#67a160] focus:outline-none"
                />
            </div>
            <div className="w-1/4 mx-auto px-8">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="confirmPassword"
        >
          Confirm Password:
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:border-[#012366] focus:outline-none"
        />
      </div>
            
            <div className="w-1/4 mx-auto mb-10 px-8">
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 mb-2 rounded-lg hover:bg-[#67a160] focus:outline-none"
                >
                    Update Password
                </button>
            </div>
            <div>
        <Link to={"/login"} className="text-sm text-blue-700 hover:text-[#c84548]"  > Go Back to LOGIN</Link>
        </div>
        </form>
        
        </>
    );
}

export default Resetpassword;
