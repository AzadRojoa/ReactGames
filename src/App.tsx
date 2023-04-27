import React from 'react';

import './App.css';
import { Planette } from './Planette/planette';
import jeuPlanette from './jeuPlanette.png';

function App() {
  return (
    <div className="App">
      <div>
        <img src={jeuPlanette} />
      </div>
      <Planette spaceSize={{ width: 256, height: 256 }}></Planette>

    </div>
  );
}

export default App;
