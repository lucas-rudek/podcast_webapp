import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

export default function Podcast(props) {
  return (
    <div className="podcastEpisode">
      <h1>{props.podcast.name}</h1>
      <p>{props.podcast.description}</p>
      <iframe
        title="teste"
        src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/13158665"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <br />
      <Link to="/">
        <button className="button" type="button">
          Back
        </button>
      </Link>
    </div>
  );
}
