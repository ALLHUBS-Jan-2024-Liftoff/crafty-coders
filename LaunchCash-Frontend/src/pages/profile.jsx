import React from "react";
import { AuthUser } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = AuthUser();
  const navigate = useNavigate("");
  console.log(user);

  const username = user.username;

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div>
        <h1>Hello, ${username}!</h1>
      </div>
      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
};

export default Profile;
