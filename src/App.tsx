import './App.css';

import React from 'react';

import { BioCard } from './components/BioCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my page</h1>
        <BioCard />
      </header>
    </div>
  );
}

export default App;
