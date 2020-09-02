import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

export default function Podcast(props) {
  var SC = require("soundcloud");

  SC.initialize({
    client_id: "z8LRYFPM4UK5MMLaBe9vixfph5kqNA25",
    redirect_uri: "https://example.com/callback"
  });

  SC.connect()
    .then(function () {
      return SC.get("/me");
    })
    .then(function (me) {
      return console.log(me.username);
    });

  return (
    <div className="podcastEpisode">
      <h1>{props.podcast.name}</h1>
      <p>{props.podcast.description}</p>
      <iframe
        title="teste"
        src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/294"
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
