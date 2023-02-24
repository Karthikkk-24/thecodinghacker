import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ComingSoon from "./ComingSoon";
import ItemCard from "./ItemCard";

export default function CardPage() {
  return (
    <div className="cardpage">
      <Router>
        <Switch>
          <Route exact path="/shop">
            <ComingSoon />
          </Route>
          <Route exact path="/projects">
            <ItemCard />
          </Route>
          <Route exact path="/blogs">
            <ItemCard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
