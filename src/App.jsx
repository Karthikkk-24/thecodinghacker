import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import NameCard from "./components/NameCard";
import Navbar from "./components/Navbar";

function App() {
  //   const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Navbar />
          <Route exact path="/">
            <NameCard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
