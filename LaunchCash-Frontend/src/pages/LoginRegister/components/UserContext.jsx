import React, { createContext, useContext, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user_session"]);
  const [currentUser, setCurrentUser] = useState(cookies.user_session || null);

  const login = async (username, password) => {
    try {
      const response = await axios.get("http://localhost:8080/api/user/login", {
        params: { username, password },
        withCredentials: true,
      });

      const user = response.data;
      setCookie("user_session", user, { path: "/", maxAge: 86400 });
      setCurrentUser(user);
      console.log("Logged in", user);
    } catch (error) {
      throw new Error("Login failed");
    }
  };

  const register = async (username, email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/register",
        null,
        {
          params: {
            username,
            email,
            password,
          },
          withCredentials: true,
        }
      );

      const user = response.data;
      console.log("Registered", user);
      setCookie("user_session", user, { path: "/", maxAge: 86400 });
      setCurrentUser(user);
    } catch (error) {
      console.error("Error during registration:", error);
      setMessage("Error during registration");
    }
  };

  const logout = () => {
    removeCookie("user_session", { path: "/" });
    setCurrentUser(null);
    console.log("Logged out", currentUser);
  };

  return (
    <UserContext.Provider value={{ currentUser, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
