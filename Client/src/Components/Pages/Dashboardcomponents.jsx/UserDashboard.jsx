// import React, { useEffect, useState } from 'react';
// import ReactModal from 'react-modal';
// // import { IoArrowRedoCircleSharp } from "react-icons/io5";
// import { MdEdit } from "react-icons/md";
// import { MdDelete } from "react-icons/md";
// import { useSelector } from 'react-redux';

// const users = [
//   { id: 1, name:'user1', email: 'user1@example.com', isActive: true },
//   { id: 2, name:'user2', email: 'user2@example.com', isActive: false },
//   // Add more users as needed
// ];

// const UserDashboard = () => {
//   const [nameValue,setnameValue]=useState()
//   const id=useSelector(state=>state.logstatus.user)
    
//   useEffect(()=>{
//     const load = async () => {
//       try {
//         const body = { id };
//         const result = await fetch("http://localhost:5000/api/get-name", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(body),
//         });

//         const res= await result.json()
//         console.log(res);
//         setnameValue(res)
//       } catch (error) {
//         console.error("Error fetching role data:", error);
//       }
//     };
//     load()

//   } ,[])
  
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [actionType, setActionType] = useState(''); // 'edit' or 'delete'

//   const openModal = (user, action) => {
//     setSelectedUser(user);
//     setActionType(action);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedUser(null);
//     setActionType('');
//   };

//   const handleConfirm = () => {
//     if (actionType === 'delete') {
//       // Handle delete logic
//       console.log('Deleting user:', selectedUser);
//     } else if (actionType === 'edit') {
//       // Handle edit logic
//       console.log('Editing user:', selectedUser);
//     }
//     closeModal();
//   };

//   return (
//     <div className="flex h-screen">
//       <nav className="w-1/6 bg-gray-100 text-[#012366] p-4 border-r border-r-[#012366]">
//         <ul className="space-y-4">
//           <li className="font-bold text-lg">Welcome {nameValue}</li>
//           <li className="hover:bg-[#012366] font-semibold hover:text-white p-2 rounded-md">Home</li>
//           <li className="hover:bg-[#012366] font-semibold hover:text-white p-2 rounded-md">About Us</li>
//           <li className="hover:bg-[#012366] font-semibold hover:text-white p-2 rounded-md">Departments</li>
//           <li className="hover:bg-[#012366] font-semibold hover:text-white p-2 rounded-md">Logout</li>
//         </ul>
//       </nav>
//       <div className='w-5/6 bg-gray-100'>
//         <div className="grid grid-cols-6 gap-6 m-4">
//         <a href='#'>
//           <div className="bg-white p-4 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900">
//             <h2 className="text-xl text-[#012366] font-bold mb-2">Dept 1</h2>
//             {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
//           </div>
//           </a>

//           <a href='#'>
//           <div className="bg-white p-4 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900 focus:border-[#012366]">
//             <h2 className="text-xl text-[#012366] font-bold mb-2">Dept 2</h2>
//             {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
//           </div>
//           </a>

//           <a href='#'>
//           <div className="bg-white p-4 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900 focus:border-[#012366]">
//             <h2 className="text-xl text-[#012366] font-bold mb-2">Dept 3</h2>
//             {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
//           </div>
//           </a>

//           <a href='#'>
//           <div className="bg-white p-4 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900 focus:border-[#012366]">
//             <h2 className="text-xl text-[#012366] font-bold mb-2">Dept 4</h2>
//             {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
//           </div>
//           </a>

//           <a href='#'>
//           <div className="bg-white p-4 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900 focus:border-[#012366]">
//             <h2 className="text-xl text-[#012366] font-bold mb-2">Dept 5</h2>
//             {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
//           </div>
//           </a>

//           <a href='#'>
//           <div className="bg-white p-4 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900 focus:border-[#012366]">
//             <h2 className="text-xl text-[#012366] font-bold mb-2">Dept 6</h2>
//             {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
//           </div>
//           </a>

//         </div>

//         <div className="container mx-auto p-6">
//           <table className="min-w-full bg-gray-100">
//             <thead className='m-4'>
//               <tr>
//                 <th className="p-2 text-left underline">User-ID</th>
//                 <th className="p-2 text-left underline">User-Name</th>
//                 <th className="p-2 text-left underline">User-Email</th>
//                 <th className="p-2 text-left underline">Active Status</th>
//                 <th className="p-2 text-left underline">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.id} className="border-b m-4 hover:bg-white hover:text-[#012366] hover:font-semibold hover:rounded-md hover:shadow-xl shadow-[#012366]">
//                   <td className="p-2 text-left m-4">{user.id}</td>
//                   <td className="p-2 text-left m-4">{user.name}</td>
//                   <td className="p-2 text-left m-4">{user.email}</td>
//                   <td className="p-2 text-left m-4">
//                     {user.isActive ? (
//                       <span className="text-green-500"><span className='text-[8px] text-center'>🟢</span> Active</span>
//                     ) : (
//                       <span className="text-red-500"><span className='text-[8px] text-center'>🔴</span> Inactive</span>
//                     )}
//                   </td>
//                   <td className="p-2 text-left mr-2 text-lg flex space-x-4">
//                     <a href='#' onClick={() => openModal(user, 'edit')}>
//                     <MdEdit />
//                     </a>
//                     <a href='#' onClick={() => openModal(user, 'delete')} className="ml-4">
//                     <MdDelete />
//                     </a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <ReactModal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Confirm Action"
//         ariaHideApp={false}
//         className="Modal"
//         overlayClassName="Overlay"
//       >
//         <h2 className="text-sm font-sans font-bold mb-4">{actionType === 'delete' ? 'Confirm Deletion' : 'Edit User'}</h2>
//         <p className='text-sm font-sans'>Are you sure you want to {actionType} this user?</p>
//         <div className="mt-4">
//   <button onClick={handleConfirm} className="bg-blue-500 text-sm font-sans text-white px-2 py-1 rounded mr-2 hover:bg-green-500">Confirm</button>
//   <button onClick={closeModal} className="bg-gray-500 text-sm font-sans text-white px-2 py-1 rounded hover:bg-red-500">Cancel</button>
// </div>
//       </ReactModal>
//     </div>
//   );
// };

// export default UserDashboard;

import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom"; 

// Replace with your Redux store logic

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [nameValue, setNameValue] = useState(''); // Replace with user name fetching logic

  const id = useSelector(state => state.logstatus.user);
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [actionType, setActionType] = useState(''); // 'edit' or 'delete'

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/read"); // Replace with your user fetching API endpoint
      const data = await response.json();
      console.log('Fetched data:', data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const   
 openModal = (user, action) => {
    setSelectedUser(user);
    setActionType(action);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedUser(null);
    setActionType('');
  };

  // const handleConfirm = async () => {
    // if (actionType === 'delete') {
    //   // Replace with your user deletion logic using fetch or axios
    //   try {
    //     const response = await fetch(http://localhost:5000/api/users/${selectedUser.id}, {
    //       method: 'DELETE',
    //     });

    //     if (response.ok) {
    //       const updatedUsers = users.filter(user => user.id !== selectedUser.id);
    //       setUsers(updatedUsers);
    //     } else {
    //       console.error('Error deleting user:', response.statusText);
    //     }
    //   } catch (error) {
    //     console.error('Error deleting user:', error);   

    //   } finally {
    //     closeModal();
    //   }
    // } else if (actionType === 'edit') {
    //   // Replace with your user edit logic using fetch or axios
    //   console.log('Edit functionality not implemented yet');
    // }
    
    const handleConfirm = async () => {
      if (actionType === 'delete') {
          try {
              // Replace selectedUser.user_id with the correct identifier used in your API.
              const response = await fetch("http://localhost:5000/api/delete/${selectedUser.user_id", {
                  method: 'DELETE',
              });
  
              if (response.ok) {
                  // If the deletion is successful, update the users state by removing the deleted user.
                  const updatedUsers = users.filter(user => user.user_id !== selectedUser.user_id);
                  setUsers(updatedUsers);
                  alert('User deleted successfully!');
              } else {
                  // Handle the case where deletion fails.
                  console.error('Error deleting user:', response.statusText);
                  alert('Failed to delete user. Please try again.');
              }
          } catch (error) {
              console.error('Error deleting user:', error);
              alert('An error occurred while deleting the user. Please try again later.');
          } finally {
              closeModal();
          }
      } else if (actionType === 'edit' && selectedUser ) {
        navigate(`/register, { state: { user: selectedUser } }`);
          console.log('Edit functionality not implemented yet');
      }
  };
  
    
    

  return (
    <>
    <div className="flex h-full">
      <nav className="w-1/6 bg-gray-100 text-[#012366] p-4 border-r border-r-[#012366]">
        <ul className="space-y-4">
          <li className="font-bold text-lg">Welcome {nameValue} </li>
          {/* <li className="hover:bg-[#012366] font-semibold hover:text-white p-2 rounded-md">Register</li> */}
          <li className="hover:bg-[#012366] font-semibold hover:text-white p-2 rounded-md">Logout</li>
        </ul>
      </nav>
      <div className='w-5/6 bg-gray-100'>
        <div className="grid grid-cols-5 gap-16 m-4">
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

          {/* <a href='#'>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900 focus:border-[#012366]">
            <h2 className="text-xl text-[#012366] font-bold mb-2">Dept 6</h2>
            {/* <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
          {/* </div>
          </a> */} 

        </div>

        <div className="container mx-auto p-6">
          <table className="min-w-full bg-gray-100">
            <thead className='m-4'>
              <tr>
                <th className="p-2 text-left underline">User-ID</th>
                <th className="p-2 text-left underline">User-Name</th>
                <th className="p-2 text-left underline">User-Email</th>
                <th className="p-2 text-left underline">Active Status</th>
                <th className="p-2 text-left underline">Action</th>
              </tr>
            </thead>
            <tbody>
  {users.map((user) => (
    <tr key={user.user_id} className="border-b m-4 hover:bg-white hover:text-[#012366] hover:font-semibold hover:rounded-md hover:shadow-xl shadow-[#012366]">
      <td className="p-2 text-left m-4">{user.user_id}</td>
      <td>{user.user_name || 'N/A'}</td> 
          <td>{user.user_email || 'N/A'}</td>
      <td className="p-2 text-left m-4">
        {user.is_active ? (
          <span className="text-green-500"><span className='text-[8px] text-center'>🟢</span> Active</span>
        ) : (
          <span className="text-red-500"><span className='text-[8px] text-center'></span> Inactive</span>
        )}
      </td>
      <td className="p-2 text-left mr-2 text-lg flex space-x-4">
        <a href='#' onClick={() => openModal(user, 'edit')}>
          <MdEdit />
        </a>
        <a href='#' onClick={() => openModal(user, 'delete')} className="ml-4">
          <MdDelete />
        </a>
      </td>
    </tr>
  ))}
</tbody>
          </table>
        </div>
      </div>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirm Action"
        ariaHideApp={false}
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2 className="text-sm font-sans font-bold mb-4">{actionType === 'delete' ? 'Confirm Deletion' : 'Edit User'}</h2>
        <p className='text-sm font-sans'>Are you sure you want to {actionType} this user?</p>
        <div className="mt-4">
  <button onClick={handleConfirm} className="bg-blue-500 text-sm font-sans text-white px-2 py-1 rounded mr-2 hover:bg-green-500">Confirm</button>
  <button onClick={closeModal} className="bg-gray-500 text-sm font-sans text-white px-2 py-1 rounded hover:bg-red-500">Cancel</button>
</div>
      </ReactModal>
  

    </div>
    </>
  );
};

export default UserDashboard;