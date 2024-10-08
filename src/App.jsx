import React, { useState } from 'react';
import './App.css';
import ColorBoxesContainer from './components/ColorBoxesContainer';

function App() {

  return (
    <div id="root">
      <h1>Color Grid</h1>
      <ColorBoxesContainer />
    </div>
  );
}

export default App;
