import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import CardPage from "./components/CardPage";
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
            <Route exact path="/shop">
              <div className="container">
                <CardPage />
              </div>
            </Route>
            <Route exact path="/blogs">
              <div className="container">
                <CardPage />
              </div>
            </Route>
            <Route exact path="/projects">
              <div className="container">
                <CardPage />
              </div>
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
