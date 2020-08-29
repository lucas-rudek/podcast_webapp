import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

export default function Podcast(props) {
  return (
    <div className="podcastContainer">
      <h1>{props.podcast.name}</h1>
      <p>{props.podcast.description}</p>
      <iframe
        title="teste"
        src={`${props.podcast.spotify_uri}`}
        width="250"
        height="240"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <br />
      <Link to="/">
        <button type="button">Back</button>
      </Link>
    </div>
  );
}
