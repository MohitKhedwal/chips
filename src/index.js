import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider  } from 'react-router-dom';
import Home from "../src/Components/Pages/Home"
import About from "../src/Components/Pages/About"
import Departments from './Components/Pages/Departments';
import Data from './Components/Pages/Data';
import Districtgis from './Components/Pages/Districtgis';
import Stategis from './Components/Pages/Stategis';
import Cgatlas from './Components/Pages/Cgatlas';
import LoginPage from './Components/Pages/Login/Client/LoginPage';
import RegistrationPage from './Components/Pages/Register/RegistrationPage';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import UserDashboard from './Components/Pages/UserDashboard'; 

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/about-us" element={<About/>} />
      <Route path="/departments" element={<UserDashboard/>}/>
      <Route path="/data" element={<Dashboard/>}/>
      <Route path="/stategis" element={<RegistrationPage/>} />
      <Route path="/districtgis" element={<LoginPage/>}/>
      <Route path="/cgatlas" element={<Cgatlas/>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
