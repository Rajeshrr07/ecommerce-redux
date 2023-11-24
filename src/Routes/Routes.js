// Routers.js
import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "../Container/Home"
import Headers from "../Components/Headers";
import Dashboard from "../Container/Dashboard";
import Product from "../Container/Product";

const Routers = () => {
  return (
    <div>
      <Headers />
     
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    
    </div>
    
  );
};

export default Routers;
