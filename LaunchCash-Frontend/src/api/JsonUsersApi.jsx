import React, { useEffect, useState } from "react";
import axios from "axios";

const JsonUserApi = () => {
  const [users, setUsers] = useState([]);
  const balance = 200;

  const getApiUsers = async () => {
    const apiUsers = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(apiUsers.data);
    console.log(users);
  };

  const mapUsers = () => {
    users.map(
      (fakeUser) =>
        (fakeUser = {
          username: fakeUser.username,
          email: fakeUser.email,
          password: fakeUser.username,
        })
    );
  };

  useEffect(() => {
    getApiUsers().then(mapUsers());
    localStorage.setItem("users", JSON.stringify(mapUsers));
    setUsers(users);
    console.log(users);
  }, []);

  return (
    <div>
      <ul>
        {users.map((listUser, index) => (
          <li key={index}>
            <strong>Username:</strong> {listUser.username} <br />
            <strong>Email:</strong> {listUser.email} <br />
            <strong>Password:</strong> {listUser.username} <br />
            <strong>Balance:</strong> ${balance} <br /> <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JsonUserApi;
