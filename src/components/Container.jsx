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
          <Route
            path="/"
            exact
            render={(props) => (
              <PodcastWidget {...props} podcast={podcast[0]} />
            )}
          />
          <Route
            path={`/${podcast[0].episode}`}
            exact
            render={(props) => <Podcast {...props} podcast={podcast[0]} />}
          />
        </Switch>
      </Router>
    </div>
  );
}
