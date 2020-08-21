import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function PodcastWidget(props) {
  //will recieve object for render in props
  return (
    <div className="podcastContainer">
      <h2>Episode: {props.podcast.episode}</h2>
      <h1>{props.podcast.name}</h1>
      <p>{props.podcast.description}</p>
      <Link to={`episode/${props.podcast.episode}`}>
        <button type="button">Listen More</button>
      </Link>
    </div>
  );
}
