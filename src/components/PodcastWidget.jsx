import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function PodcastWidget(props) {
  return (
    <div className="podcastWidget">
      <h2>Episode: {props.podcast.episode}</h2>
      <h1>{props.podcast.name}</h1>
      <p>{props.podcast.description}</p>
      <Link to={`${props.podcast.episode}`}>
        <button type="button">Listen More</button>
      </Link>
    </div>
  );
}
