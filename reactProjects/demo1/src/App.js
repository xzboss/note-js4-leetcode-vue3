import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [a, setA] = useState(0);
  const click = () => {
    setA(a + 1);
  };
  return (
    <div className="App">
      <h1 onClick={click}>----{a}------</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
