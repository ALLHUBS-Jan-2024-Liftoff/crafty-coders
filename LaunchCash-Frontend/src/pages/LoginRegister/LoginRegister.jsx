import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { FaUserAstronaut, FaLock, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import "./assets/LoginRegister.css";

//Code for Login page
const LoginRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [action, setAction] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:8080/api/user/login", {
        params: { username, password },
      });
      console.log(response.data);
      console.log(response.data.user.username);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setIsLoggedIn(true);
      navigate(`/profile/${username}`);
    } catch (error) {
      console.error("Error logging in:", error);
      setMessage("Error logging in");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/register",
        null,
        {
          params: {
            username,
            email,
            password,
          },
        }
      );
      setMessage(response.data.message);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate(`/profile/${username}`);
    } catch (error) {
      console.error("Error logging in:", error);
      setMessage("Error logging in");
    }
  };

  //Sets wrapper to active when Register button is clicked
  const registerLink = () => {
    setAction(" active");
  };

  //Sets wrapper to inactive when Login button is clicked
  const loginLink = () => {
    setAction("");
  };

  return (
    <>
      {!isLoggedIn ? (
        <div className={`wrapper${action}`}>
          <div className="form-box login">
            <form action="" onSubmit={handleLogin}>
              <h1>Login</h1>
              <div className="input-box">
                <input
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <FaUserAstronaut className="icon" />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <FaLock className="icon" />
              </div>

              {/* Remember me and forgot password do not work yet. */}
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#">Forgot password?</a>
              </div>

              {/* <Link to="/profile/:username"> */}
              <button type="submit">Login</button>
              {/* </Link> */}

              <div className="register-link">
                <p>
                  Don't have an account?{" "}
                  <a href="#" onClick={registerLink}>
                    Register
                  </a>
                </p>
              </div>
            </form>
            {message && <p>{message}</p>}
          </div>

          <div className="form-box register">
            <form action="" method="post" onSubmit={handleRegister}>
              <h1>Create Account</h1>
              <div className="input-box">
                <input
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <FaUserAstronaut className="icon" />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <FaEnvelope className="icon" />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <FaLock className="icon" />
              </div>

              {/* Terms & conditions are empty for now. */}
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />I agree to the terms & conditions
                </label>
              </div>

              <button type="submit">Register</button>

              <div className="register-link">
                <p>
                  Already have an account?{" "}
                  <a href="#" onClick={loginLink}>
                    Login
                  </a>
                </p>
              </div>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      ) : (
        redirect("/profile/:username")
      )}
    </>
  );
};

export default LoginRegister;
