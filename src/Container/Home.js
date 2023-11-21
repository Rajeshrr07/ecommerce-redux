import React from "react";
import Headers from "../Components/Headers";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Headers />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Home;
