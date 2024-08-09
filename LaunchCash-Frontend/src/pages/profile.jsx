

import React, { useContext } from 'react';
import {user} from './LoginRegister/components/UserContext';


const Profile = () => {
  const username = useContext(user);
  console.log(username);
  
  return (
      <div>
        <h1>Hello, {username}!</h1>
      </div>
  )
}

export default Profile;