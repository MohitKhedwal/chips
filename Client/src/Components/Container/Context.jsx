import React, { createContext, useState, useContext } from 'react';

// Create a context
const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
  const [roleValue,setroleValue] = useState(0);

  return (
    <MyContext.Provider value={{ roleValue,setroleValue }}>
      {children}
    </MyContext.Provider>
  );
};

// Create a custom hook to use the context
export const useMyContext = () => useContext(MyContext);
