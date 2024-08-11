import React from "react";
import { AuthUser } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
//import logout from "../components/Logout";

const Profile = () => {
  let user = AuthUser();
  const navigate = useNavigate("");

  console.log(user);
  console.log(user.username);
  const username = user.username;
  const balance = user.balance;
  console.log(username);

  const logout = () => {
    localStorage.clear();
    console.log(user);
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
