import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AddUser } from "./pages/AddUser";
import { UserList } from "./pages/UserList";
import { Navbar } from "./components/Navbar";
import { NotFound } from "./pages/NotFound";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/users" element={<UserList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
