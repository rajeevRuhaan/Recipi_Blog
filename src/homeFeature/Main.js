import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Recipes from "./Recipes";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/gallery" component={Recipes} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default Main;
