import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "./components/Container.jsx";

export default function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component="" />
        </Switch>
        <h1>Future Talk</h1>
        <Container />
      </Router>
    </div>
  );
}
