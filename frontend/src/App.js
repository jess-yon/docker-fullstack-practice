import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [lists, setLists] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios.get("/api/values").then((response) => {
      console.log(response);
      setLists(response.data);
    });
  }, []);

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
