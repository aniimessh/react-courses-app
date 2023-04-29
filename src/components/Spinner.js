import React from "react";
import "./Spinner.css";

function Spinner() {
  return (
    <div className="flex flex-col items-center space-x-4">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Spinner;
