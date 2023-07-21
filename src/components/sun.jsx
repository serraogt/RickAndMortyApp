// components/Sun.jsx
import React from "react";
import "./Sun.css";
import gunes from "../assets/gunes.png";

const Sun = ({ children }) => {
  return (
    <div className="sunImg">
      <img alt="sun" src={gunes} height={200} width={200} />
      {children}
    </div>
  );
};

export default Sun;