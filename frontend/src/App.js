import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <input type="text" placeholder="Please input text" />
          <button type="submit">Submit</button>
        </div>
      </header>
    </div>
  );
}

export default App;
