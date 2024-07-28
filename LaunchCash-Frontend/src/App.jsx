import React from "react";
import LoginRegister from "./pages/LoginRegister";
import profile from "./pages/profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<LoginRegister />} />
            <Route path="/profile" element={<profile />} />
        </Routes>

      </Router>
      </div>
  )
}

export default App;
