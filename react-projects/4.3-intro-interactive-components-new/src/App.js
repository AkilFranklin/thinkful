import "./App.css";
import React, { useState } from "react";

function App() {
  const handleClick = (e) => console.log(e.target);
  const [doSomething, setDoSomething] = useState(true);

  return (
  <main>
    <h1>Hello World!</h1>
    <button onClick={() => setDoSomething(false)}>
      {doSomething ? "Do Something" : "Don't Do Anything"}
    </button>
  </main>
  )
}

export default App;