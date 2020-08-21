import React from "react";
import "../styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PodcastWidget from "./PodcastWidget.jsx";
import Podcast from "./Podcast.jsx";
import fetchFunction from "../fetchFunction";

export default function Container() {
  const podcast = fetchFunction();
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path={`/${podcast[0].episode}`} exact component={Podcast} />
        </Switch>
        <PodcastWidget podcast={podcast[0]} />
        <PodcastWidget podcast={podcast[1]} />
        <PodcastWidget podcast={podcast[2]} />
      </Router>
    </div>
  );
}
