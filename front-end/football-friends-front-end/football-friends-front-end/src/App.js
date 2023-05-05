import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import Homepage from "./homepage";
import Profile from "./profile";
import Friends from "./friends";
import Messages from "./messages";
import Search from "./search";
import Login from "./login";
import Register from "./register";
import { Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
