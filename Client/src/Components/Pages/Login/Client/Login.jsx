import React, { useState } from 'react';
import { useMyContext } from '../../../Container/Context';

const Login = ({ changeAuth }) => {
  const { roleValue, setroleValue } = useMyContext();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const body = { email, password };
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await res.json();
      const role = parseRes.roleLevel;
      setroleValue(role);

      if (parseRes.jwttoken) {
        localStorage.setItem("token", parseRes.jwttoken);
        changeAuth(true);
        console.log("Logged in Successfully");
      } else {
        changeAuth(false);
        alert(parseRes);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="flex flex-col items-center space-y-4 font-sans" onSubmit={handleSubmit}>
      <div className="w-full px-8">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e=>handleChange(e)}
          name="email"
          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:border-[#67a160] focus:outline-none"
        />
      </div>
      <div className="w-full px-8">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password:
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter a strong password"
          value={password}
          onChange={e=>handleChange(e)}
          name="password"
          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:border-[#67a160] focus:outline-none"
        />
      </div>
      <div className="w-full px-8 text-left">
        <a href="#" className="text-sm text-blue-700 hover:text-[#c84548]">Forgot your password?</a>
      </div>
      <div className="w-full px-8">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 mb-2 rounded-lg hover:bg-[#67a160] focus:outline-none"
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default Login;
