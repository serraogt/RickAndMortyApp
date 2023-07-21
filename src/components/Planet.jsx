// components/Planet.jsx
import React from "react";
import "./Planet.css";

const Planet = ({ planetData }) => {
  const { planetName, planetNumber, oneYear } = planetData;

  return (
    <div>
      <div className="planet_name">{planetName}</div>
      <div className="planet_number">Planet Number: {planetNumber}</div>
      <div className="planet_year">1 year here lasts {oneYear}</div>
    </div>
  );
};

export default Planet;