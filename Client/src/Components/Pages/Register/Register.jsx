import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [roleId, setRoleId] = useState('');
  const [deptId, setDeptId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    console.log('Form submitted', { name, email, password, roleId, deptId });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 font-sans">
      <div className="w-full px-8">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name:
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:border-[#012366] focus:outline-none"
        />
      </div>
      <div className="w-full px-8">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
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
          placeholder="Enter a strong password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:border-[#012366] focus:outline-none"
        />
      </div>
      <div className="w-full px-8">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
          Confirm Password:
        </label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:border-[#012366] focus:outline-none"
        />
      </div>
      <div className="w-full px-8">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roleId">
          Role ID:
        </label>
        <select
          id="roleId"
          value={roleId}
          onChange={(e) => setRoleId(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:border-[#012366] focus:outline-none"
        >
          <option value="" disabled>Select Role ID</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="w-full px-8">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deptId">
          Department ID:
        </label>
        <select
          id="deptId"
          value={deptId}
          onChange={(e) => setDeptId(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:border-[#012366] focus:outline-none"
        >
          <option value="" disabled>Select Dept ID</option>
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
  );
};

export default Register;
