import React, { createContext, useState, useContext } from 'react';
import store from '../store/store';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [roleValue, setRoleValue] = useState(0);

  const login = (token, role) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    setRoleValue(role);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setRoleValue(0);
  };

  return (
    <AuthContext.Provider  value={{ isAuthenticated, roleValue, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
