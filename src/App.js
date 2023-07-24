// App.js
import React, { useState } from "react";
import "./App.css";
import Planet from "./components/Planet";
import PlanetPicture from "./components/PlanetPicture";
import Sun from "./components/Sun";
import arrow from "./assets/white-down-arrow-png-2.png";
import planetsData from "./data/PlanetsData";
import { Button } from "@mui/material";

const App = () => {
  const [current, setCurrent] = useState(0);

  const nextPageHandler = () => {
    setCurrent((current) => (current + 1) % planetsData.length);
  };

  return (
    <div className="App">
      <div className="welcome">WELCOME!</div>
      <div className="planet_container">
        <div className="planet_info">
          <Planet planetData={planetsData[current]} />
          <div className="nextOperator" onClick={nextPageHandler}>
            <img alt="arrow" src={arrow} />
          </div>
        </div>
        <div className="planetPicContainer">
          <PlanetPicture planetPicture={planetsData[current].planetPicture} />
        </div>
      </div>
      <Sun>
      Sun Rising :)
      </Sun>
    </div>
  );
};

export default App;