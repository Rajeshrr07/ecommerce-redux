// Home.js
import React from "react";
import Headers from "../Components/Headers";
import Dashboard from "./Dashboard";
import Product from "./Product";
import { BrowserRouter,Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Headers />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
