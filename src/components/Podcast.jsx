import React from "react";
import "../styles.css";

export default function Podcast(props) {
  const podcast = {
    episode: "01",
    name: "Test",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  };

  return (
    <div className="podcastContainer">
      <h2>Episode: {podcast.episode}</h2>
      <h1>{podcast.name}</h1>
      <p>{podcast.description}</p>
      <button type="button">Listen More</button>
    </div>
  );
}
