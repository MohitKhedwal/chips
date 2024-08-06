import React from 'react';

const users = [
  { id: 1, name:'user1', email: 'user1@example.com', isActive: true },
  { id: 2, name:'user2', email: 'user2@example.com', isActive: false },
  { id: 3, name:'user3', email: 'user3@example.com', isActive: true },
  { id: 4, name:'user4', email: 'user4@example.com', isActive: false },
  { id: 5, name:'user5', email: 'user5@example.com', isActive: false },
  { id: 6, name:'user6', email: 'user6@example.com', isActive: true },
  { id: 7, name:'user7', email: 'user7@example.com', isActive: false },
  { id: 8, name:'user8', email: 'user8@example.com', isActive: true },
  { id: 9, name:'user9', email: 'user9@example.com', isActive: false },
];

const UserDashboard = () => {
  return (
    <div className="flex h-screen">
      <nav className="w-1/6 bg-gray-100 text-[#012366] p-4">
        <ul className="space-y-4">
          <li className="font-bold text-lg">User Dashboard</li>
          <li className="hover:bg-[#012366] font-semibold hover:text-white p-2 rounded-md">Home</li>
          <li className="hover:bg-[#012366] font-semibold hover:text-white p-2 rounded-md">About Us</li>
          <li className="hover:bg-[#012366] font-semibold hover:text-white p-2 rounded-md">Departments</li>
          <li className="hover:bg-[#012366] font-semibold hover:text-white p-2 rounded-md">Logout</li>
        </ul>
      </nav>
      <div className='w-5/6  bg-gray-100'>
      <div className="grid grid-cols-6 gap-6 m-4">
      <a href='#'>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900">
            <h2 className="text-xl text-[#012366] font-bold mb-2">Dept 1</h2>
            {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
          </div>
          </a>

          <a href='#'>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900 focus:border-[#012366]">
            <h2 className="text-xl text-[#012366] font-bold mb-2">Dept 2</h2>
            {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
          </div>
          </a>

          <a href='#'>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900 focus:border-[#012366]">
            <h2 className="text-xl text-[#012366] font-bold mb-2">Dept 3</h2>
            {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
          </div>
          </a>

          <a href='#'>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900 focus:border-[#012366]">
            <h2 className="text-xl text-[#012366] font-bold mb-2">Dept 4</h2>
            {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
          </div>
          </a>

          <a href='#'>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900 focus:border-[#012366]">
            <h2 className="text-xl text-[#012366] font-bold mb-2">Dept 5</h2>
            {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
          </div>
          </a>

          <a href='#'>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900 focus:border-[#012366]">
            <h2 className="text-xl text-[#012366] font-bold mb-2">Dept 6</h2>
            {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
          </div>
          </a>

      </div>
      <div className="container mx-auto p-6">
      <table className="min-w-full bg-gray-100">
        <thead className='m-4'>
          <tr>
            <th className="p-2 text-left underline">User-ID</th>
            <th className="p-2 text-left underline">User-Name</th>
            <th className="p-2 text-left underline">User-Email</th>
            <th className="p-2 text-left underline">Active Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b m-4 hover:bg-white hover:text-[#012366] hover:font-semibold rounded-lg hover:shadow-xl shadow-[#012366] ">
              <td className="p-2 text-left m-4">{user.id}</td>
              <td className="p-2 text-left m-4">{user.name}</td>
              <td className="p-2 text-left m-4">{user.email}</td>
              <td className="p-2 text-left m-4">
                {user.isActive ? (
                  <span className="text-green-500"><span className='text-[8px] text-center'>🟢</span> Active</span>
                ) : (
                  <span className="text-red-500"><span className='text-[8px] text-center'>🔴</span> Inactive</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
      </div>
    );
};

export default UserDashboard;
