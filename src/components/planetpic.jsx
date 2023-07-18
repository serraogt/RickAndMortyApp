import React from "react";
import './planetpic.css';

let planetPicture;

function PlanetPic({planetPicture}) {
    return (
      <div className="planet__pic">
        <img alt="planetpic" src={planetPicture} height={296} width={296} />
      </div>
    );
  } 
  
  export default PlanetPic;
  