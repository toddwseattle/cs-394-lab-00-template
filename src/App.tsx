import './App.css';

import React from 'react';

import { BioCard } from './components/BioCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my page</h1>
        {/* TODO: Pass your personal information as props to BioCard */}
        {/* Hint: BioCard needs name, link, description, and imageUrl props */}
        {/* Example: <BioCard name="Your Name" link="..." ... /> */}
        {/* Question: What values will you use for each prop? */}
        <BioCard />
      </header>
    </div>
  );
}

export default App;
