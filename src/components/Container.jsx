import React from "react";
import "../styles.css";
import PodcastWidget from "./PodcastWidget.jsx";
import fetchFunction from "../fetchFunction";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//fetch function that load soundcloud API to pass trought props

export default function Container() {
  const podcast = fetchFunction();

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path={`/${podcast[0].episode}`} exact component="" />
        </Switch>
        <PodcastWidget podcast={podcast[0]} />
        <PodcastWidget podcast={podcast[1]} />
        <PodcastWidget podcast={podcast[2]} />
      </Router>
    </div>
  );
}
