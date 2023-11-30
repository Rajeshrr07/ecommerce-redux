import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(15);
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    setTimeout(() => navigate("/"), 15000);
  }, [navigate]);
  return (
    <h5 className="mt-5">
      Your order been placed successfully. You will be Redirected in {count}{" "}
      seconds
    </h5>
  );
};

export default Success;
