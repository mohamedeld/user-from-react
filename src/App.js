import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AddUser } from "./pages/AddUser";
import { UserList } from "./pages/UserList";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </>
  );
};

export default App;
