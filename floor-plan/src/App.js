import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import Calendar from './calendar';
import Building from './createBuilding';


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
export default App;