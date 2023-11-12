import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("jwt") ? true : false
  );
  const [jwt, setJwt] = useState(null);

  useEffect(() => {
    const jwtFromLS = localStorage.getItem("jwt");

    if (jwtFromLS) {
      setIsAuthenticated(true);
      setJwt(jwtFromLS);
    }
  }, []);

  return [isAuthenticated, jwt];
};
