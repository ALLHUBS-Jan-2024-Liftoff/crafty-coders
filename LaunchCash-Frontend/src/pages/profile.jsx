import React from "react";
import { AuthUser } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = AuthUser();
  const navigate = useNavigate("");
  console.log(user);

  const username = user.username;
// <<<<<<< findUser
// =======
  const balance = user.balance;
  console.log(username);
// >>>>>>> main

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className="hello-user">
        <h1>Hello, {username}!</h1>
        <div>
          <h2>Balance: ${balance}</h2>
          <div>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
