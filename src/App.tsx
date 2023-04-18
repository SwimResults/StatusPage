import React from 'react';
import './App.css';
import ProgressSection from "./sections/ProgressSection";

function App() {

  return (
    <div className="App">
      <h1>SwimResults - Status</h1>
      <h2>Entwicklungsfortschritt</h2>
      <ProgressSection />
      <footer>
        &copy; 2023 - SwimResults
      </footer>
    </div>
  );
}

export default App;
