// components/PlanetPicture.jsx
import React from "react";
import "./PlanetPicture.css";

const PlanetPicture = ({ planetPicture }) => {
  return (
    <div className="planet__pic">
      <img alt="planetpic" src={planetPicture} height={296} width={296} />
    </div>
  );
};

export default PlanetPicture;