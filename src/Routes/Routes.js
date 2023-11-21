import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Container/Home";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
