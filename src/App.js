import "./App.css";
import React, { useState } from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import Planet from './components/Planet.jsx';
import PlanetPicture from "./components/PlanetPicture.jsx";
//import Sun from "./components/sun.jsx";
import arrow from "./assets/white-down-arrow-png-2.png";
import planetsData from "./data/PlanetsData";
import NavBar from "./components/NavBar";
import AddNew from "./pages/AddNew";
import Home from "./pages/Home";

const App = () => {
 // switch(window.location.pathname)

 const navigate = useNavigate(); 
  navigate('/Home');

  return (
    <div>
    <NavBar/>
    <div className="container">
      <Routes>
        <Route path="/"  element={Home}/>
        <Route path="/AddNew"  element={AddNew}/>
     </Routes>  
    </div> 
    </div>
  );
};

export default App;