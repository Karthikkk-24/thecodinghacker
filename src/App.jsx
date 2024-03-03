import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="main_container">
        <div className="navbar_container">
          <Navbar />
        </div>
        <div className="content_container">
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
