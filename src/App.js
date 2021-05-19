import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          PECK's NAVY - Ocean City NJ's Boating Club
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/groups/2322729067827878"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the crew on Facebook
        </a>
      </header>
    </div>
  );
}

export default App;
