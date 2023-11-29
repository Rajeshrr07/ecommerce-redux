// Routers.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Container/Home";
import Product from "../Container/Product";
import Headers from "../Components/Headers";
import Addcart from "../Container/Addcart";
import Checkout from "../Container/Checkout";

const Routers = () => {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Addcart />} />
        <Route path="/checkout/">
          <Route path="" element={<Checkout />} />
          <Route path=":id" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
