import logo from './logo.svg';
import './App.css';
import StackBuild from './Stack.js';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import buildingBG from './resources/img/office-building-45.png';
import { goToGroundFloor, goToFloor1, goToFloor2, goToFloor3, goToFloor4} from './resources/functions/buildingClickerFunction';


function App() {
  return (
    <div className = "App">
      <img src={buildingBG} alt = "Zamisli zgradu" className = "Building" useMap = "#workmap"/>
      <map name="workmap">
        <area target="" alt="GroundFloor" title="GroundFloor"  coords="565,1560,565,1778,1385,2113,1389,1888" shape="poly" onClick={() => goToGroundFloor()}/>
        <area target="" alt="GroundFloor" title="GroundFloor"  coords="1389,2120,1391,1893,2050,1448,2048,1669" shape="poly" onClick={() => goToGroundFloor()}/>
        <area target="" alt="Floor1" title="Floor1"  coords="1393,1770,1580,1651,2056,1335,2056,1155,1393,1532,572,1270,572,1460" shape="poly" onClick={() => goToFloor1()}/>
        <area target="" alt="Floor2" title="Floor2"  coords="569,1163,567,970,1393,1207,1393,1423,2056,1063,2054,868,1396,1211,1393,1425" shape="poly" onClick={() => goToFloor2()}/>
        <area target="" alt="Floor3" title="Floor3"  coords="569,644,1391,858,1387,1100,567,871" shape="poly" onClick={() => goToFloor3()}/>
        <area target="" alt="Floor3" title="Floor3"  coords="1389,865,1389,1108,2054,769,2054,566" shape="poly" onClick={() => goToFloor3()}/>
        <area target="" alt="Floor4" title="Floor4"  coords="569,347,572,541,1393,764,1393,537" shape="poly" onClick={() => goToFloor4()}/>
        <area target="" alt="Floor4" title="Floor4"  coords="2048,255,2050,473,1396,767,1393,538" shape="poly" onClick={() => goToFloor4()}/>
      </map>
      <div className = "Container">
        <div className='ContainerInner'>
        </div>
      </div>
    </div>
    
  );
}

<<<<<<< Updated upstream
class App extends Component {
  

  render() {
    return ( 
      <div>
        
        <Building />
      </div>
        
      
    )
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
=======
>>>>>>> Stashed changes
export default App;