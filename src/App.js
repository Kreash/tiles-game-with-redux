import React from 'react';
import './App.css';

import TilesField from './components/Tiles-field/Tiles-field'

function App(props) {

  return (
    <div className="App">
      <div className='gameField'>
        <TilesField state={props.state} store={props.store} />
      </div>
    </div>
  );
}

export default App;
