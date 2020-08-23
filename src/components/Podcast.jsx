import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

export default function Podcast(props) {
  return (
    <div className="podcastContainer">
      <h1>{props.podcast.name}</h1>
      <p>{props.podcast.description}</p>
      <Link to="/">
        <button type="button">Back</button>
      </Link>
    </div>
  );
}
