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
import { useNavigate } from 'react-router-dom';

function Forgotpassword() {
    const [email, setEmail] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { email };
            const res = await fetch("http://localhost:5000/api/forgot-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const parseRes = await res.json();
            if (parseRes.Status === "Success") {
                navigate('/login');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form className="flex flex-col items-center space-y-4 font-sans h-screen" onSubmit={handleSubmit}>
            <div className="w-1/4 mx-auto px-8 mt-5">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email:
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                    required
                    className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:border-[#67a160] focus:outline-none"
                />
            </div>
            
            <div className="w-1/4 mx-auto mb-10 px-8">
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 mb-2 rounded-lg hover:bg-[#67a160] focus:outline-none"
                >
                    Send
                </button>
            </div>
        </form>
    );
}

export default Forgotpassword;
