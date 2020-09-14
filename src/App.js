import React from "react";
import Container from "./components/Container.jsx";
import styled from "styled-components";

export default function App(props) {
  const App = styled.div`
    font-family: sans-serif;
    text-align: center;
    margin: 0 10% 0 10%;
  `;
  return (
    <App>
      <h1>Ausculta Cast</h1>
      <Container />
    </App>
  );
}
