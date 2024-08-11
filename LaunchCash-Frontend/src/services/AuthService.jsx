export const AuthUser = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return {};
  }
  return JSON.parse(user);
};
