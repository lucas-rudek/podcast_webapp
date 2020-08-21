import React from "react";
import "../styles.css";
import PodcastWidget from "./PodcastWidget.jsx";
import fetchFunction from "../fetchFunction";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//fetch function that load soundcloud API to pass trought props

export default function Container() {
  const podcast = fetchFunction();
  console.log(podcast);
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path={`/${podcast.episode}`} component="" />
        </Switch>
        <PodcastWidget />
        <PodcastWidget />
        <PodcastWidget />
      </Router>
    </div>
  );
}
