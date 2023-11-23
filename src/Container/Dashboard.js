import React from "react";
import { productlist } from "../Data/ProdeuctList";
import Productcard from "../Components/Productcard";

const Dashboard = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center p-3">
      {productlist.map((item) => (
        <Productcard {...item} />
      ))}
    </div>
  );
};

export default Dashboard;
