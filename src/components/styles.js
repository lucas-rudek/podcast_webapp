import styled from "styled-components";

export const AppWrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  margin: 0 10% 0 10%;
`;

export const ContainerWrapper = styled.div`
  margin-top: 5%;
  display: flex;
  align-content: center;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const PodcastWidgetWrapper = styled.div`
  width: 200px;
  min-height: 300px;
  text-align: left;
  margin: 0 32px 32px 0;

  img {
    width: 150px;
  }

  @media (max-width: 600px) {
    width: 80vw;
    min-height: 100px;
  }
`;

export const PodcastWrapper = styled.div`
  p {
  text-align: left;
  }

  button {
  margin: 20px;
}

  iframe {
  width: 600px;
  height: 200px;
}

@media (max-width: 600px) {
    iframe {
    width: 250px;
    height: 150px;
  }
`;
