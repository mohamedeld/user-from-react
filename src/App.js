import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AddUser } from "./pages/AddUser";
import { UserList } from "./pages/UserList";
import { Navbar } from "./components/Navbar";
import { NotFound } from "./pages/NotFound";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
