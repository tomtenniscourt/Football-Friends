import NavBar from "../Navigation/NavBar";
import Homepage from "./Homepage";
import Profile from "../User/Profile";
import Friends from "../User/Friends";
import Messages from "../User/Messages";
import Search from "../Navigation/Search";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import { Routes, Route } from "react-router-dom";
import React from "react";
import AllUsers from "../User/AllUsers";
import ViewUser from "../User/ViewUser";

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
        <Route path="/AllUsers" element={<AllUsers />} />
        <Route path="/ViewUser" element={<ViewUser />} />
      </Routes>
    </div>
  );
}

export default App;
