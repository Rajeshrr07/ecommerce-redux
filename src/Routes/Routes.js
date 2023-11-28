// Routers.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Container/Home";
import Product from "../Container/Product";
import Headers from "../Components/Headers";

const Routers = () => {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
