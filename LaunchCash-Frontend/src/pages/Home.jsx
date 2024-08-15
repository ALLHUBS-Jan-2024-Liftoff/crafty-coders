import React from "react";
import { UserContext } from "./LoginRegister/components/UserContext";

const Home = () => {
  console.log(UserContext);
  return (
    <div>
      <h1>Welcome to LaunchCash!</h1>
    </div>
  );
};

export default Home;
