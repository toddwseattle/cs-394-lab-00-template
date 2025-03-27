import './App.css';

import React from 'react';

import { BioCard } from './components/BioCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my page</h1>
        <BioCard
          name="John Doe"
          link="https://example.com/profile"
          description="Software Engineer with a passion for React"
          imageUrl="https://loremfaces.net/96/id/2.jpg"
        />
      </header>
    </div>
  );
}

export default App;
