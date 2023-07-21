import "./App.css";
import Planet from './components/planets.jsx';
import PlanetPicture from "./components/planetpic.jsx";
import World from "./assets/earth.png";
import Mars from "./assets/mars.png";
import React, {useState} from "react";
import Sun from "./components/sun.jsx"
import Mercure from "./assets/mercure.png";
import Venus from "./assets/venus.png";
import arrow from "./assets/white-down-arrow-png-2.png";

const App=()=>{
const[current,setCurrent]= useState (0);
const nextPageHandler = () => {
    setCurrent((current) => (current + 1) % planets.length);
  };

  const planets=[
    { id:0,
      planetPicture: Mercure,
      planetNumber : 1,
      planetName: "Mercure",
      oneYear: "88 Earth days"
  },
  {
    id:1,
    planetPicture:Venus,
     planetNumber: 2,
     planetName: "Venus",
     oneYear: "224 Earth days"
  },
  { id:2,
    planetPicture: World,
    planetNumber: 3,
    planetName:"Earth",
    oneYear: "365 Earth days"
  },
  { id:3,
    planetPicture: Mars,
    planetNumber: 4,
    planetName:"Mars",
    oneYear: "687 Earth days"}]


  return (
    <div
      className="App" 
      style={{backgroundSize: "cover" }}
      id="myClass" >
        <div className="welcome">WELCOME!</div>
        <div className="backGrName">{planets[current].planetName} </div>
        <div>
        <div><h2 className="swipe">Tap for the {(current+1)%(planets.length)+1}th planet!</h2></div>
      <Planet planetNumber={planets[current].planetNumber} planetName={planets[current].planetName} oneYear={planets[current].oneYear}></Planet>
      </div>
      <div>
      <PlanetPicture planetPicture={planets[current].planetPicture}></PlanetPicture>
      <Sun></Sun>
      </div>
      <img alt="arrow" className="nextOperator" onClick={nextPageHandler} src={arrow}/>
    
    </div>
  );
  }
export default App;