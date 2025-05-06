import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import React, { useState } from 'react';

function App() {
  const [state, setState] = useState(0);

  return (
    <>
      <h1>Simple Counter</h1>
      <Viewer value={state}/>
      <Controller counter={setState} value={state} />
    </>
  );
}

export default App;