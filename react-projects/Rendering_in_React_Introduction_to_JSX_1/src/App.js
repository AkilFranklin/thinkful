import React from "react";
import ReactDOM from "react-dom";
import NoHelloWorld from "./components/NoHelloWorld";
import ShoppingList from "./components/ShoppingList";
import Greeting from "./components/Greeting";

const shirts = 4;
const pants = 6;
const website = "https://www.thinkful.com/";
const language = "es";


function App(){
    return (
    <main>
        <Greeting  language={language}/>
        <NoHelloWorld />
        <ShoppingList shirts={shirts} pants={pants} website={website}/>
    </main>
    )
}

export default App;