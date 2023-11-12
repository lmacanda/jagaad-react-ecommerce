import { createContext, useContext, useState } from "react";
import { login, logout } from "../services/authServices";

const initialState = {
  isAuthenticated: false,
  authenticate: () => {},
  signout: () => {}
};

export const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("accessToken") ? true : false
  );

  const authenticate = async (email, password) => {
    const response = await login(email, password);
    localStorage.setItem("accessToken", response["access_token"]);
    setIsAuthenticated(true);
  };

  const signout = async () => {
    await logout();
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, authenticate, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
