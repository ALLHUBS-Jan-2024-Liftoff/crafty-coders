import React, { createContext, useEffect, useState } from "react";
import { AuthUser } from "../../../services/AuthService";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      let authUser = AuthUser();

      if (authUser === null) {
        localStorage.setItem("user", "");
        authUser = "";
      }

      setCurrentUser(authUser);
    };

    checkUser();
  }, []);

  console.log("usercontext", currentUser);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
