import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Recipes from "./Recipes";
import Form from "../Pages/Form";
import "./Main.css";

const Main = () => {
  return (
    <section>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/gallery" component={Recipes} />
          <Route path="/form" component={Form} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </section>
  );
};

export default Main;
