import React from "react";
import { AppWrapper } from "./components/styles.js";
import Container from "./components/Container.jsx";

export default function App(props) {
  return (
    <AppWrapper>
      <h1>Ausculta Cast</h1>
      <Container />
    </AppWrapper>
  );
}
