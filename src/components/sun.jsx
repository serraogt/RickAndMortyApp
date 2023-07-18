import React from "react";
import "./sun.css";
import gunes from  "../assets/gunes.png";


function Sun() {
    return (
      <div className="sunImg">
        <img alt="sun" src={gunes} height={200} width={200} />
      </div>
    );
  } 
  
  export default Sun;