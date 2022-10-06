import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 1000);
  return (
    <div>
      <h2>NotFound</h2>
    </div>
  );
};

export default NotFound;
