import React, { useEffect, useState } from "react";
import axios from "axios";

const JsonUserApi = () => {
  const [users, setUsers] = useState([]);

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
    console.log(users);
  };

  useEffect(() => {
    getApiUsers().then(mapUsers());

    localStorage.setItem("users", JSON.stringify(mapUsers));
    setUsers(users);
  }, []);

  return (
    <div>
      <ul>
        {users.map((listUser, index) => (
          <li key={index}>
            <strong>Username:</strong> {listUser.username} <br />
            <strong>Email:</strong> {listUser.email} <br />
            <strong>Password:</strong> {listUser.username} <br />
            <strong>Balance:</strong> $200.00 <br /> <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JsonUserApi;
