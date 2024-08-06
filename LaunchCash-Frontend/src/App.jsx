import React from "react";
import LoginRegister from "./pages/LoginRegister";
import Profile from "./pages/Profile";
import NavBar from './pages/NavBar'
//import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginRegister />} />
          {/* <Route path="/register" Component={<Register />} /> */}
          <Route path={`/profile/${username}`} element={<Profile />} />
            {/*<Route path="/transaction" component={Transaction} />
            <Route path="/friends" component={Friends} />
               <Route path="/profile" component={Profile} /> */}
        </Routes>

      </>
      </div>
  )
}

export default App;