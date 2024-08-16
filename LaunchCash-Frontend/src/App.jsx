import React from "react";
import Profile from "./pages/profile";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Login from "./pages/LoginRegister/Login";
import Register from "./pages/LoginRegister/Register";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./pages/LoginRegister/components/UserContext";
import { SearchBar } from "./components/SearchBar";
import BudgetPage from "./components/BudgetPage";
import JsonUserApi from "./api/JsonUsersApi";
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar />
        <div>SearchResults</div>
      </div>

      <UserProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/json" element={<JsonUserApi />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path={"/profile/:username"} element={<Profile />} />
            <Route path="/budget" element={<BudgetPage />} />
            <Route path="/ContactForm" element={<ContactForm />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;