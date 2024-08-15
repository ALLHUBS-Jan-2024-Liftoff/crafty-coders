export const AuthUser = () => {
  const user = localStorage.getItem("user");
  console.log("Z", user);

  if (!user) {
    return {};
  }

  return JSON.parse(user);
};

// export const login = async (e) => {
//   return (

//   )
// }

// export const register = () => {
//   return (

//   )
// };

// export const logout = () => {
//   return (

//   )
// };
