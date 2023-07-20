import "./App.css";
import Planet from './components/planets.jsx';
import PlanetPicture from "./components/planetpic.jsx";
import World from "./assets/earth.png";
import Mars from "./assets/mars.png";
import React from "react";
import Sun from "./components/sun.jsx"
import Mercure from "./assets/mercure.png";

function ColorfulText({ children }) {
  return <span style={{ color: "burlywood" }}>{children}</span>;
}


let n = " _ ";
function App() {
  const planets=[
    { id:0,
      planetPicture: Mercure,
      planetNumber : 1,
      planetName: "Mercure",
      oneYear: "88 Earth days"
  },
  {
    id:1,
    planetPicture:null,
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
    oneYear: "687 Earth days"}


]
  return (
    <div
      className="App" 
      style={{backgroundSize: "cover" }}
      id="myClass" >
        <div className="welcome">
        <ColorfulText>Welcome!</ColorfulText></div>
        <div>
          <div><h2 className="swipe">Swipe for the {n}th planet!</h2></div>
      <Planet planetNumber={planets[0].planetNumber} planetName={planets[0].planetName} oneYear={planets[0].oneYear}></Planet>
      </div>
      <div>
      <PlanetPicture planetPicture={planets[0].planetPicture}></PlanetPicture>
      <Sun></Sun>
      </div>

     {/*
      <Planet planetNumber="4" planetName="Mars"  ></Planet>
  <PlanetPic planetPicture={Mars}></PlanetPic> */}
    
    </div>
  );
}

export default App;