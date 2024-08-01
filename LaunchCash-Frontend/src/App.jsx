import React from "react";
import LoginRegister from "./pages/LoginRegister";
import profile from "./pages/profile";
import NavBar from './pages/NavBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
    <NavBar />
        <Routes>
          <Route path="/" element={<LoginRegister />} />
            <Route path="/profile" element={<profile />} />
            <Route path="/transaction" component={Transaction} />
            <Route path="/friends" component={Friends} />
               <Route path="/profile" component={Profile} />
        </Routes>

      </Router>
      </div>
  )
}

export default App;
