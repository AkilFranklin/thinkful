import React from "react";
import Greeting from "./Greeting";

function App() {
    const props1 = {
        name: "Avantha",
        greeting: "good morning"
    }
    const props2 = {
        name: "Samara",
        greeting: "good afternoon"
    }
    const props3 = {
        name: "Houston",
        greeting: "good evening"
    }
    return (
    <div>
        <Greeting props={props1}/>
        <Greeting props={props2}/>
        <Greeting props={props3}/>
    </div>
    )
}

export default App;
