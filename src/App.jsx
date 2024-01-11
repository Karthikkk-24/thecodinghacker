import { useState } from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import "./assets/css/General.css";
import Navbar from "./components/Navbar";

function App() {
  //   const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="navbar_container">
        <Navbar />
      </div>
      <div className="content_container">
        <div className="main_container">
          <div className="left">
            <h1 className="heading">I turn ideas into reality</h1>
            <h3 className="sub_heading">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              est ipsum recusandae impedit quaerat quidem suscipit debitis
            </h3>
            <button className="custom_btn">
              Let's Collaborate&ensp;
              <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
          <div className="right"></div>
        </div>
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
