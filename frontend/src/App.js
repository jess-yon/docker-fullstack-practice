import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [lists, setLists] = useState([]);
  const [value, setValue] = useState("");

  const changeHandler = (event) => {
    setValue(event.currentTarget.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post("/api/value", { value: value }).then((response) => {
      if (response.data.success) {
        console.log("response: ", response);
        setLists([...lists, response.data]);
        setValue("");
      } else {
        alert("Request failed");
      }
    });
  };

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
          <input
            type="text"
            placeholder="Please input text"
            onChange={changeHandler}
          />
          <button type="submit" onSubmit={submitHandler}>
            Submit
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
