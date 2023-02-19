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
          <div className="main_container">
            <Navbar />
            <Route exact path="/">
              <div className="content">
                <NameCard />
              </div>
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
