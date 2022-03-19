import './App.css';
import * as React from 'react';
import buildingBG from './resources/img/office-building-45.png';
import { goToGroundFloor, goToFloor1, goToFloor2, goToFloor3, goToFloor4} from './resources/functions/buildingClickerFunction';


function App() {
  return (
    <div className = "App">
      <img src={buildingBG} alt = "Zamisli zgradu" className = "Building" useMap = "#workmap"/>
      <map name="workmap">
        <area target="" alt="GroundFloor" title="GroundFloor"  coords="625,957,923,746,920,649,627,837,624,956,255,799,253,699,626,839,625,957" shape="poly" onClick={() => goToGroundFloor()}/>
        <area target="" alt="Floor1" title="Floor1"  coords="255,571,627,689,627,794,257,658" shape="poly" onClick={() => goToFloor1()}/>
        <area target="" alt="Floor1" title="Floor1"  coords="926,602,924,519,626,691,627,795" shape="poly" onClick={() => goToFloor1()}/>
        <area target="" alt="Floor2" title="Floor2"  coords="628,644,624,544,923,389,927,475" shape="poly" onClick={() => goToFloor2()}/>
        <area target="" alt="Floor2" title="Floor2"  coords="255,437,256,526,627,642,628,546" shape="poly" onClick={() => goToFloor2()}/>
        <area target="" alt="Floor3" title="Floor3"  coords="255,291,255,390,627,494,627,387" shape="poly" onClick={() => goToFloor3()}/>
        <area target="" alt="Floor3" title="Floor3"  coords="627,387,923,255,925,347,627,497" shape="poly" onClick={() => goToFloor3()}/>
        <area target="" alt="Floor4" title="Floor4"  coords="922,114,927,212,626,348,626,243" shape="poly" onClick={() => goToFloor4()}/>
        <area target="" alt="Floor4" title="Floor4"  coords="256,156,255,245,627,346,627,241" shape="poly" onClick={() => goToFloor4()}/>
      </map>
      <div className = "Container">
        <div className='ContainerInner'>
        </div>
      </div>
    </div>
    
  );
}

export default App;