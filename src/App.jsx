import { useState } from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import CardPage from "./components/CardPage";
import NameCard from "./components/NameCard";
import Navbar from "./components/Navbar";

function App() {
  //   const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="navbar_container">
        <div className="main_container">
            <div className="section section1"></div>
            <div className="section section2"></div>
            <div className="section section3"></div>
        </div>
      </div>
      <div className="content_container">
        <div className="main_container"></div>
        <div className="curve_background"></div>
      </div>
      <div className="footer_container">
        <div className="main_container">
            <div className="social_section"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
