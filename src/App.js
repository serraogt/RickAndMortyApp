import "./App.css";
import React, { useState } from "react";
import Planet from './components/Planet.jsx';
import PlanetPicture from "./components/PlanetPicture.jsx";
import Sun from "./components/Sun.jsx"
import arrow from "./assets/white-down-arrow-png-2.png";
import planetsData from "./data/PlanetsData";

const App = () => {
  const [current, setCurrent] = useState(0);
  const nextPageHandler = () => {
    setCurrent((current) => (current + 1) % planetsData.length);
  };

  return (
    <div className="App">
      <div className="welcome">WELCOME!</div>
      <div className="backGrName">{planetsData[current].planetName} </div>
      <div>
        <div>
          <h2 className="swipe">
            Tap for the {(current + 1) % planetsData.length + 1}th planet!
          </h2>
        </div>
        <Planet planetData={planetsData[current]} />
      </div>
      <div>
        <PlanetPicture planetPicture={planetsData[current].planetPicture} />
        <Sun>Click me</Sun>
      </div>
      <img
        alt="arrow"
        className="nextOperator"
        onClick={nextPageHandler}
        src={arrow}
      />
    </div>
  );
};

export default App;