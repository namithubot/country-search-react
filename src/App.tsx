import React from "react";
import './App.css';
import Search from './modules/search/Search';

/**
 * Root Application component
 * @returns {JSX.Element} Root App React component
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Search Your Country
      </header>
      <div className="app-body">
        <Search />
      </div>
    </div>
  );
}

export default App;
