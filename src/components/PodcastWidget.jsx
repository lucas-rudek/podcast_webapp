import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import fetchFunction from "../fetchFunction";

console.log(fetchFunction());

export default function PodcastWidget(props) {
  //will recieve object for render in props

  return (
    <h1>Testtt</h1>
    /*
  <div className="podcastContainer">
      <h2>Episode: {podcast.episode}</h2>
      <h1>{podcast.name}</h1>
      <p>{podcast.description}</p>
      <Link to={`episode/${podcast.episode}`}>
        <button type="button">Listen More</button>
      </Link>
    </div>
*/
  );
}
