import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import Login from "./components/Login";
import Routines from "./components/Routines";
import MyRoutines from "./components/MyRoutines";
import Register from "./components/Register";
import Activities from "./components/Activities";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <div className="nav">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/routines">Routines</Link>
            </li>
            <li>
              <Link to="/my-routines">My Routines</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/activities">Activities</Link>
            </li>
            <li>
              {" "}
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/routines" element={<Routines />} />
          <Route path="/my-routines" element={<MyRoutines />} />
          <Route path="/register" element={<Register />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
