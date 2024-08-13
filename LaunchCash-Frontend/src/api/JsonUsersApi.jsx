import React, { useEffect } from "react";
import axios from "axios";

const JsonUserApi = () => {
  const [users, setUsers] = useState("");

  const getApiUsers = async () => {
      const apiUsers = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(apiUsers.data);
    };
    
    useEffect(() => {
        getApiUsers();
    }, [])

    return ()
};

export default JsonUserApi;
