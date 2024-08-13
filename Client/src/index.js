// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';
// // import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider  } from 'react-router-dom';
// // import Home from "../src/Components/Pages/Home"
// // import About from "../src/Components/Pages/About"
// // import Departments from './Components/Pages/Departments';
// // import Data from './Components/Pages/Data';
// // import Districtgis from './Components/Pages/Districtgis';
// // import Stategis from './Components/Pages/Stategis';
// // import Cgatlas from './Components/Pages/Cgatlas';
// // import LoginPage from './Components/Pages/Login/Client/LoginPage';
// // import { MyProvider } from './Components/Container/Context';

// // const checkAuthenticated = async () => {
// //   try {
// //     const res = await fetch("http://localhost:5000/verify", {
// //       method: "POST",
// //       headers: { jwt_token: localStorage.token, }
// //     });

// //     const parseRes = await res.json();
// //     // checkLevel()

// //     setIsAuthenticated(parseRes === true);
// //   } catch (err) {
// //     console.error(err.message);
// //   }
// // };

// // useEffect(() => {
// //   checkAuthenticated();
// //   // checkLevel()
// // }, []);

// // const [isAuthenticated, setIsAuthenticated] = useState(false);

// // const changeAuth = (boolean) => {
// //   setIsAuthenticated(boolean);
// // };

// // const router=createBrowserRouter(
// //   createRoutesFromElements(
// //     <Route path="/" element={<App/>}>
// //       <Route path="/" element={<Home/>} />
// //       <Route path="/about-us" element={<About/>} />
// //       <Route path="/departments" element={<Departments/>}/>
// //       <Route path="/data" element={<Data/>}/>
// //       <Route path="/stategis" element={<Stategis/>} />
// //       <Route path="/districtgis" element={<LoginPage/>}>
// //       <Routes>
// //             <Route
// //               path="/login"
// //               element={!isAuthenticated ? (
// //                 <LoginPage changeAuth={changeAuth} />
// //               ) : (
// //                 <Navigate to="/dashboard" />
// //               )}
// //             />
// //             <Route
// //               path="/register"
// //               element={!isAuthenticated ? (
// //                 <Registerr changeAuth={changeAuth} />
// //               ) : (
// //                 <Navigate to="/dashboard" />
// //               )}
// //             />
// //             <Route
// //               path="/dashboard"
// //               element={isAuthenticated ? (
// //                 <Dashboard changeAuth={changeAuth} />
// //               ) : (
// //                 <Navigate to="/login" />
// //               )}
// //             />
// //           </Routes
// //       </Route>
// //       <Route path="/cgatlas" element={<Cgatlas/>} />

// //     </Route>
// //   )
// // )

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //      <MyProvider>
// //      <RouterProvider router={router} />
// //      </MyProvider>

// //   </React.StrictMode>
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
//   Navigate,
// } from "react-router-dom";
// import Home from "./Components/Pages/Home";
// import About from "./Components/Pages/About";
// import Departments from "./Components/Pages/Departments";
// import Data from "./Components/Pages/Data";
// import Districtgis from "./Components/Pages/Districtgis";
// import Stategis from "./Components/Pages/Stategis";
// import LoginPage from "./Components/Pages/Login/Client/LoginPage"
// import RegisterPage from "./Components/Pages/RegisterPage";
// import Dashboard from "./Components/Pages/Dashboard";
// import { MyProvider } from "./Components/Container/Context";
// import Cgatlas from "./Components/Pages/Cgatlas";

// const AppWrapper = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const checkAuthenticated = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/verify", {
//         method: "POST",
//         headers: { jwt_token: localStorage.token },
//       });

//       const parseRes = await res.json();
//       setIsAuthenticated(parseRes === true);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   useEffect(() => {
//     checkAuthenticated();
//   }, []);

//   const changeAuth = (boolean) => {
//     setIsAuthenticated(boolean);
//   };

//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<App />}>
//         <Route index element={<Home />} />
//         <Route path="about-us" element={<About />} />
//         <Route path="departments" element={<Departments />} />
//         <Route path="data" element={<Data />} />
//         <Route path="stategis" element={<Stategis />} />
//         <Route
//           path="login"
//           element={
//             !isAuthenticated ? (
//               <LoginPage changeAuth={changeAuth} />
//             ) : (
//               <Navigate to="/dashboard" />
//             )
//           }
//         />
//         {/* <Route
//           path="register"
//           element={
//             !isAuthenticated ? (
//               <RegisterPage changeAuth={changeAuth} />
//             ) : (
//               <Navigate to="/dashboard" />
//             )
//           }
//         /> */}
//         <Route
//           path="dashboard"
//           element={
//             isAuthenticated ? (
//               <Dashboard changeAuth={changeAuth} />
//             ) : (
//               <Navigate to="/login" />
//             )
//           }
//         />
//         <Route path="cgatlas" element={<Cgatlas />} />
//       </Route>
//     )
//   );

//   return <RouterProvider router={router} />;
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
 
//     <MyProvider>
//       <AppWrapper />
//     </MyProvider>
  
// );

// reportWebVitals();


import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Departments from "./Components/Pages/Departments";
import Data from "./Components/Pages/Data";
import Districtgis from "./Components/Pages/Districtgis";
import Stategis from "./Components/Pages/Stategis";
import LoginPage from "./Components/Pages/Login/Client/LoginPage";
import Dashboard from "./Components/Pages/Dashboard";
import { MyProvider } from "./Components/Container/Context";
import Cgatlas from "./Components/Pages/Cgatlas";
import UserDashboard from "./Components/Pages/Dashboardcomponents.jsx/UserDashboard";
import Admindashboard from "./Components/Pages/Dashboardcomponents.jsx/Admindashboard";
import RegistrationPage from "./Components/Pages/Register/RegistrationPage";
import Forgotpassword from "./Components/Pages/Login/Client/Forgotpassword";
import Resetpassword from "./Components/Pages/Login/Client/Resetpassword";
import { Provider } from "react-redux";
import store from "./Components/store/store";


const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const 

  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();
      setIsAuthenticated(parseRes === true);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const changeAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="departments" element={<Departments/>} />
        <Route path="data" element={<Data />} />
        <Route path="stategis" element={<Stategis />} />
        <Route
          path="login"
          element={
            !isAuthenticated ? (
              <LoginPage changeAuth={changeAuth} />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        <Route
          path="register"
          element={
           <RegistrationPage/>
          }
        />
          <Route
          path="dashboard"
          element={
            isAuthenticated ? (
              <Dashboard changeAuth={changeAuth} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
         <Route path="forgot-password" element={<Forgotpassword/>} />
    
        <Route path="cgatlas" element={<Cgatlas />} />
        <Route path="reset-password/:user_id/:token"  element={<Resetpassword/>}/>
        {/* <Route path="register" element={<RegistrationPage/>}/> */}
        <Route path="districtgis" element={<Districtgis/>} />
    </Route>
    )
  );

  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <Provider store={store}>
   <MyProvider >
    <AppWrapper />
  </MyProvider>
 </Provider>
);

reportWebVitals();
