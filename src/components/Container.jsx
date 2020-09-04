import React from "react";
import "../styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PodcastWidget from "./PodcastWidget.jsx";
import Podcast from "./Podcast.jsx";
import Fetch_function from "../Fetch_function.js";

export default function Container() {
  const podcast = Fetch_function();
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            {podcast.map((res) => {
              return <PodcastWidget podcast={res} />;
            })}
          </Route>
          {podcast.map((res) => {
            return (
              <Route
                exact
                path={`/${res.episode}`}
                render={(props) => <Podcast {...props} podcast={res} />}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}
