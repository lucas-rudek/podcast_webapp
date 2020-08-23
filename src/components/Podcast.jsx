import React from "react";
import "../styles.css";

export default function Podcast(props) {
  console.log(props);
  return (
    <>
      <h2>Episode: {props.podcast.episode}</h2>
      <h1>{props.podcast.name}</h1>
      <p>{props.podcast.description}</p>
    </>
  );
}
