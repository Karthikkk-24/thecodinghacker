import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
