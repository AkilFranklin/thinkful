import React from "react";
import Holiday from "./Holiday";

const valentine = {
    name: "Valentine's Day",
    day: 14,
    month: "February"
}

const christmas = {
    name: "Christmas",
    day: 25,
    month: "December"
}

function App() {
    return (
    <main>
    <Holiday name={valentine.name} day={valentine.day} month={valentine.month}/>
    <Holiday name={christmas.name} day={christmas.day} month={christmas.month}/>
    </main>
    )
}

export default App;
