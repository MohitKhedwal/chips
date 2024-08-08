import React, { useEffect, useState } from "react";

// {changeAuth}
const Register =() => {
  const[roleData,setRoleData]=useState([])
  const [isLoading, setIsLoading] = useState(true);
  useEffect( ()=>{
   const fetchrole=async()=>{
    try{
    const roleRes = await fetch("http://localhost:5000/api/role-fetch", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
     
    });
    const roleres = await roleRes.json();
  
    // const flattenedRoleData = roleres.flat();
    console.log(roleres);

    // Set the flattened data in state
   setRoleData(roleres);
  }catch (error) {
    console.error("Error fetching role data:", error);
    // setRoleData([]);
} finally {
    // Set loading to false once data is fetched
    setIsLoading(false);
}
   }
   fetchrole();

  },[])
  
  console.log(roleData,"roleD")


  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    role: "",
    password: "",
    dept: "",
  });
  const { email, name, role, password, dept } = inputs;
  const [error, setError] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const body = { email, name, role, password, dept };
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const parseRes = await res.json();
      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        // changeAuth(true);
        alert("Register Successfully");
      } else {
        // changeAuth(false);
        alert(parseRes);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  // if(roleData.length==0){
  //   setIsLoading(true);
  // }else{
  //   setIsLoading(false);
  // }

  return (
    // <>
    // {
    //   isLoading? (
    //     <div>Loading...</div>
    //   ):(
        
    <form
    onSubmit={handleSubmit}
    className="flex flex-col items-center space-y-4 font-sans"
  >
    <div className="w-full px-8">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="name"
      >
        Name:
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={onChange}
        required
        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:border-[#012366] focus:outline-none"
      />
    </div>
    <div className="w-full px-8">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="email"
      >
        Email:
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={onChange}
        required
        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:border-[#012366] focus:outline-none"
      />
    </div>
    <div className="w-full px-8">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="password"
      >
        Password:
      </label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter a strong password"
        value={password}
        onChange={onChange}
        required
        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:border-[#012366] focus:outline-none"
      />
    </div>
    <div className="w-full px-8">
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
    <div className="w-full px-8">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="role"
      >
        Role ID:
      </label>
      <select
        id="role"
        name="role"
        value={role}
        onChange={onChange}
        required
        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:border-[#012366] focus:outline-none"
      >
        <option value="" disabled>
          Select Role ID
        </option>
        {
          roleData.map(r=>(
            <option key={r[0]} value={r[0]}>{r[1]}</option>
          ))
        }
     
      </select>
    </div>
    <div className="w-full px-8">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="dept"
      >
        Department ID:
      </label>
      <select
        id="dept"
        name="dept"
        value={dept}
        onChange={onChange}
        required
        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:border-[#012366] focus:outline-none"
      >
        <option value="" disabled>
          Select Dept ID
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
    {error && <div className="w-full px-8 text-red-500">{error}</div>}
    <div className="w-full px-8">
      <button
        type="submit"
        className="w-full mt-2 bg-[#012366] text-white py-2 mb-2 rounded-lg hover:bg-[#67a160] focus:outline-none"
      >
        Register
      </button>
    </div>
  </form>
      // )
    )}
  // </>
  // )
   

// };
export default Register;
