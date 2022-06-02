import logo from './logo.svg';
import './App.css';
import { name, anotherName, anotherAnotherName } from 'niks-app-lib'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Have fun with {name} &amp; {anotherName}, {anotherAnotherName}
        </a>
      </header>
    </div>
  );
}

export default App;
