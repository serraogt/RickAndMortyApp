// components/Planet.jsx
import React from "react";
import "./Planet.css";

const Planet = ({ planetData }) => {
  const { planetName, planetNumber, oneYear } = planetData;

  return (
    <div>
      <ul>
      <li className="planet_namebox">
        <h2>{planetName}</h2>
      </li>
      <li className="planet_namebox">
        <h2>Planet Number is: {planetNumber}</h2>
      </li>
      <li className="planet_namebox">
        <h2>1 year here lasts {oneYear} </h2>
      </li>
      <div className="next_planet"></div>
      </ul>
    </div>
  );
};

export default Planet;