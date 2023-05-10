import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const loginAuth = () => {
    console.log("Logged In");
    setIsLoggedIn(true);
  };

  const logoutAuth = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, loginAuth, logoutAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
