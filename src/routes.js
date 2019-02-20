import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Videos from "./Components/Videos";
import Merch from "./Components/Merch";
import "./styles/main.scss";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/blog" component={Blog} />
    <Route path="/videos" component={Videos} />
    <Route path="/contact" component={Contact} />
    <Route path="/merch" component={Merch} />
  </Switch>
);
