import React from "react";

function Greeting({props}) {
    return <p>Hello and {props.greeting}, {props.name}!</p>
}

export default Greeting;
