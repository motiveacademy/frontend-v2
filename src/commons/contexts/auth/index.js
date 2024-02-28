"use client"

import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AUTH_DEFAULT_VALUE = {
  isAuth: false,
  uid: null
};

export const AuthContextProvider = ({ children }) => {
  const defaultState = useState(AUTH_DEFAULT_VALUE);
  return (
    <AuthContext.Provider value={defaultState}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
export const useAuth = () => {
  const [auth] = useAuthContext();
  return auth;
};
