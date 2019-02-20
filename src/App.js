import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import routes from "./routes";
import { HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <div>{routes}</div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
