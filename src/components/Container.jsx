import React from "react";
import "../styles.css";
import Podcast from "./Podcast.jsx";

function Container() {
  return (
    <div className="container">
      <Podcast />
      <Podcast />
      <Podcast />
    </div>
  );
}

export default Container;
