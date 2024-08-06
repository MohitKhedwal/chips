// import React, { useEffect, useState } from 'react'
// import './Login.css'
// // import { Link } from 'react-router-dom'
// import logo from "../../../../images/logo.ico"

// function Login() {

//   const initialvalues={
//     username:" ",
//     email:" ",
//     password:" ",

//   }// taking the initial values
//   const[formvalues,setFormvalues]=useState(initialvalues);// setting the initial values as initial form values
//   const[formerror,setFormerror]=useState({});// initially all the form errors will be makred  empty
//  const [submit,setSubmit]=useState(false);// intially the form will not be sumbitted

//  const handlesubmit=(e)=>{ // used to submit the 
//   e.preventDefault();  // save the form being send to somewhere else
//   setFormerror(validate(formvalues)) // check for errors
//   setSubmit(true)// then submit the form
//   console.log(formvalues);
//  }

//  const handlechange=(e)=>{ // used to submit the values 
//   const{name,value}=e.target; // taking values
//   setFormvalues({...formvalues,[name]:value}); // setting the form the values
// }

// useEffect(()=>{
//   console.log(formerror)
//   if(Object.keys(formerror).length===0 && submit){
//     console.log(formvalues);// now checking if the values of the form is correct AS there are no error
//   }
// },[formerror])

// const validate=(val)=>{
//   const error={} // puts all the error got during the object
// //  const regex2=/^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\.[a-zA-Z]{2,}$/
//   const regex=/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;// regular expression for password
// if(!val.username){
//   error.username="Username is required" // if the username is empty
// }
// if(!val.email){
//   error.email="Email is required" // if the email is empty
// }
// // }else if(!regex2.test(val.email)){
// //   error.email="Email not is required format"
// // }


// if(!val.password){
//   error.password="Password is required" // if the password is empty
// }else if(!regex.test(val.password)){
//   error.password="Password should have 8 character long with one special character and one " // password does not follow the regex
// }

// return error;
// }

//   return (
//    <section>
//     <div className='positiondiv'>
//       {/* {Object.keys(formerror).length===0 && submit ?(
//         <div className='msg'>Signed in Successfull</div>
//       ):(
//         <pre>{JSON.stringify(formvalues, undefined, 2)}</pre>
//       )} */}
//       <div className='main'>
//         <div className='logo'>
//           <img src={logo} alt="" />

//         </div>
         
//          {/* <Link to="/signup" className='signuplink'>
//           Sign UP
//          </Link>  */}
       

                      
//                       <form onSubmit={handlesubmit} >
//                         <h1>Login Form</h1>
//                         <div className='ui-form'>
//                         <div className='field'>
//                             <label htmlFor="" className='label'>Username</label>
//                             <input
//                             type='text'
//                             placeholder='Enter Your Username'
//                             onChange={handlechange}
//                             name='username'
//                             value={formvalues.username} // this is the most important attribute 
//                             className='input'
//                             />
                            
//                           </div>
//                           <p>{formerror.username}</p>
                      

//                           <div className='field'>
//                             <label htmlFor="" className='label'>Email:</label>
//                             <input type="email"
//                             onChange={handlechange} 
//                             name='email'
//                             placeholder='Enter Email'
//                             value={formvalues.email}// this tells where to send the data
//                             // onChange={handlechange}
//                             className='input'
//                             />

//                           </div>
//                           <p>{formerror.email}</p>
//                           <div className='field'>
//                             <label htmlFor="" className='label'>Password</label>
//                             <input
                            
//                             type='password'
//                             name="password"
//                             placeholder='Enter password'
//                             value={formvalues.password}
//                             onChange={handlechange}
//                             className='input'
//                             />
//                           </div>
//                           <p>{formerror.password}</p>
                         
//                          <button className='btn'>Submit</button>

//                           </div>
//                       </form>

//       </div>

//     </div>


//    </section>
//   )
// }

// export default Login

// import React, { useEffect, useState } from 'react';
// import logo from "../../../../images/logo.ico";

// function Login() {

//   const initialvalues = {
//     username: "",
//     email: "",
//     password: "",
//   };

//   const [formvalues, setFormvalues] = useState(initialvalues);
//   const [formerror, setFormerror] = useState({});
//   const [submit, setSubmit] = useState(false);

//   const handlesubmit = (e) => {
//     e.preventDefault();
//     setFormerror(validate(formvalues));
//     setSubmit(true);
//     console.log(formvalues);
//   };

//   const handlechange = (e) => {
//     const { name, value } = e.target;
//     setFormvalues({ ...formvalues, [name]: value });
//   };

//   useEffect(() => {
//     console.log(formerror);
//     if (Object.keys(formerror).length === 0 && submit) {
//       console.log(formvalues);
//     }
//   }, [formerror]);

//   const validate = (val) => {
//     const error = {};
//     const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

//     if (!val.username) {
//       error.username = "Username is required";
//     }
//     if (!val.email) {
//       error.email = "Email is required";
//     }
//     if (!val.password) {
//       error.password = "Password is required";
//     } else if (!regex.test(val.password)) {
//       error.password = "Password should be at least 8 characters long, contain one special character, one number, and one uppercase letter";
//     }

//     return error;
//   };

//   return (
//     <section className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
//         <div className="flex justify-center">
//           <img src={logo} alt="Logo" className="w-32 h-12" />
//         </div>
//         <form onSubmit={handlesubmit} className="space-y-6">
//           <h1 className="text-2xl font-bold text-center">Login Here</h1>
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Username</label>
//               <input
//                 type="text"
//                 placeholder="Enter Your Username"
//                 onChange={handlechange}
//                 name="username"
//                 value={formvalues.username}
//                 className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//               />
//               <p className="mt-1 text-sm text-red-600">{formerror.username}</p>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter Email"
//                 onChange={handlechange}
//                 name="email"
//                 value={formvalues.email}
//                 className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//               />
//               <p className="mt-1 text-sm text-red-600">{formerror.email}</p>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Password</label>
//               <input
//                 type="password"
//                 placeholder="Enter password"
//                 onChange={handlechange}
//                 name="password"
//                 value={formvalues.password}
//                 className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//               />
//               <p className="mt-1 text-sm text-red-600">{formerror.password}</p>
//             </div>

//             <button type="submit" className="w-full px-4 py-2 font-medium text-white bg-[#9EC8B9] rounded-md hover:bg-[#092635] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Login;

// import React, { useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:5000/api/auth/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       setAuth(data.token);
  //       localStorage.setItem('token', data.token);
  //       navigate('/dashboard');
  //     } else {
  //       alert(data.error);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className="flex flex-col items-center space-y-4 font-sans">
      <div className="w-full px-8">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          type="email"
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:border-[#012366] focus:outline-none"
        />
      </div>
      <div className="w-full px-8">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password:
        </label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder='Enter a strong password'
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:border-[#012366] focus:outline-none"
        />
      </div>
      <div className="w-full px-8 text-left">
        <a href='#' className='text-sm text-[#012366] hover:text-[#c84548]'>Forgot your password?</a>
      </div>
      <div className="w-full px-8">
        <button
          type="submit"
          className="w-full bg-[#012366] text-white py-2 mb-2 rounded-lg hover:bg-[#67a160] focus:outline-none"
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default Login;
