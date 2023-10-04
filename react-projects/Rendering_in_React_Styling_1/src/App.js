import React from "react";
import "./App.css";
import WelcomeBack from "./WelcomeBack";

function App() {
  const styleA = {textAlign: "center", fontFamily:"cursive"};
  const styleB = {textAlign: "center", fontFamily:"monospace"};
  return (
    <div>
      <h1 style={styleA}>Hello!</h1>

      <h4 style={styleB}>How are you?</h4>
      <h5 className="App-weather-message">Today is a nice day!</h5>
      <WelcomeBack name="Joe" />
      <WelcomeBack  />
    </div>
  );
}

export default App;
