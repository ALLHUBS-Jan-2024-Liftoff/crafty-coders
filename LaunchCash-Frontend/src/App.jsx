import React from "react";
import Profile from "./pages/Profile";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home/Home";
import Login from "./pages/LoginRegister/Login";
import Register from "./pages/LoginRegister/Register";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./pages/LoginRegister/components/UserContext";
import BudgetPage from "./components/BudgetPage";
import Friends from "./pages/Friends/Friends";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <UserProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path={"/profile/:username"} element={<Profile />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/budget" element={<BudgetPage />} />
          <Route path="/ContactForm" element={<ContactForm />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
