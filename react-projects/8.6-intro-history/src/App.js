import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import NoMatch from "./NoMatch";
import UserProfile from "../../8.7-intro-nested-routes/src/UserProfile";
import GoHome from "./BackButton";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";

function App() {
  return (
    <Router>
      <GoHome />
      <BackButton />
      <ForwardButton />
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/users/:userId/" element={<UserProfile/>} />

        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
