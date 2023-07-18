import "./App.css";
import Planet from './components/planets.jsx';
import PlanetPic from "./components/planetpic.jsx";
import World from "./assets/earth.png";
import Mars from "./assets/mars.png";
import React from "react";
import Sun from "./components/sun.jsx"

function ColorfulText({ children }) {
  return <span style={{ color: "burlywood" }}>{children}</span>;
}

function App() {
  return (
    <div
      className="App" 
      style={{backgroundSize: "cover" }}
      id="myClass" >
        <div className="welcome">
        <ColorfulText>Welcome!</ColorfulText></div>
        <div>
      <Planet planetNumber="3" planetName="Earth" ></Planet>
      </div>
      <div>
      <PlanetPic planetPicture={World}></PlanetPic>
      <Sun></Sun>
      </div>

     {/*
      <Planet planetNumber="4" planetName="Mars"  ></Planet>
  <PlanetPic planetPicture={Mars}></PlanetPic> */}
    
    </div>
  );
}

export default App;