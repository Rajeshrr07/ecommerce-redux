// Home.js
import React from "react";
import Headers from "../Components/Headers";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Home;
