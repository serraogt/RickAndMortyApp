import React from "react";
import "./planets.css";

let planetName;
let planetNumber;

function Planet({planetName, planetNumber}) {
  return (
    <div>
      <div className="planet_namebox">
      <h2>{planetName}</h2>
      </div>

      <div className="planet_namebox"> 
      <h2>Planet Number is: {planetNumber}</h2>
      </div>
      <div className="next_planet"></div>
    </div>
  );
}

export default Planet;
