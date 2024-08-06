//Input code for user profile. Path LaunchCash/profile

import React from 'react';
import response from './LoginRegister';

const Profile = () => {
  console.log(response.data);
  var username = response.data.username;
  return (
      <div>
      <h1>Hello, {username}!</h1>
      </div>
  )
}

export default Profile;