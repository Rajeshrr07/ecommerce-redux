import React from "react";
import Headers from "../Components/Headers";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <Headers />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default Home;
