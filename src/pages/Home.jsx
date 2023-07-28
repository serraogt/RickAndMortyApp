import "../App.css";
import React, { useState } from "react";
import Planet from '../components/Planet.jsx';
import PlanetPicture from "../components/PlanetPicture.jsx";
//import Sun from "../components/sun.jsx";
import arrow from "../assets/white-down-arrow-png-2.png";
import planetsData from "../data/PlanetsData";
import NavBar from "../components/NavBar";
import { Switch } from "@mui/material";
import AddNew from "./AddNew";
import { Link } from "react-router-dom"; 


 function Home(){

   const [current, setCurrent] = useState(0);
   const nextPageHandler = () => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % planetsData.length);
   };


    return(  
        <div className="Home">
    <div className="welcome">HOME</div>
    <div className="backGrName">{planetsData[current].planetName} </div>
    <div>
     <div>  <Link to="/add-new" className="addNewLink">
        Add New?!
      </Link> </div>
      <div>   
    
          {/*Tap for the {(current + 1) % planetsData.length + 1}th planet!*/}
       
      </div>
      <PlanetPicture planetPicture={planetsData[current].planetPicture} />
    </div>
    <div>
    <Planet planetData={planetsData[current]} />
      
      {/*<Sun>Click me</Sun>*/}
    </div>
    <img
      alt="arrow"
      className="nextOperator"
      onClick={nextPageHandler}
      src={arrow}
    />
  </div>)
 }
 export default Home;