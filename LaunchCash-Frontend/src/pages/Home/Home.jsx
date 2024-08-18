import React from "react";

const Home = () => {
  return (
    <div
      className="d-flex flex-column min-vh-100 justify-content-center align-items-center"
      style={{
        border: "solid",
        margin: "40px",
      }}
    >
      <h1>Welcome to LaunchCash!</h1>
      <div>
        <p className="fs-4">Click on Login to get started.</p>
      </div>
    </div>
  );
};

export default Home;
