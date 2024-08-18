import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/transaction">
        Transaction
      </Link>
      <Link className="nav-link" to="/friends">
        Friends
      </Link>
      <Link className="nav-link" to="/Budget">
        Budget
      </Link>
      <Link className="nav-link" to="/ContactForm">
        Contact Us
      </Link>
      <Link className="nav-link" to="/profile/:username">
        Profile
      </Link>

      {!user ? (
        <>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </>
      ) : (
        <>
          <span className="nav-link">Welcome, {user.firstName}</span>
          <button
            className="nav-link btn btn-link"
            onClick={handleLogout}
            style={{ border: "none", padding: 0 }}
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
};

export default NavBar;
