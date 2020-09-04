import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function PodcastWidget(props) {
  return (
    <div key={props.id} className="podcastWidget">
      <h2>{props.podcast.name}</h2>
      <img src={`${props.podcast.image}`} alt="episode" />
      <p>{props.podcast.description}</p>
      <Link to={`${props.podcast.episode}`}>
        <button type="button">Saiba Mais</button>
      </Link>
    </div>
  );
}
