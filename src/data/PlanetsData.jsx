// data/planetsData.js

import Mercure from "../assets/mercure.png";
import Venus from "../assets/venus.png";
import World from "../assets/earth.png";
import Mars from "../assets/mars.png";

const planetsData = [
  {
    id: 0,
    planetPicture: Mercure,
    planetNumber: 1,
    planetName: "Mercure",
    oneYear: "88 Earth days",
  },
  {
    id: 1,
    planetPicture: Venus,
    planetNumber: 2,
    planetName: "Venus",
    oneYear: "224 Earth days",
  },
  {
    id: 2,
    planetPicture: World,
    planetNumber: 3,
    planetName: "Earth",
    oneYear: "365 Earth days",
  },
  {
    id: 3,
    planetPicture: Mars,
    planetNumber: 4,
    planetName: "Mars",
    oneYear: "687 Earth days",
  },
  // Add more planets here as needed
];

export default planetsData;