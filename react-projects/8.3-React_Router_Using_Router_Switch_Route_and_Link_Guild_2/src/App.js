import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch,
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import NoMatch from "./NoMatch";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
