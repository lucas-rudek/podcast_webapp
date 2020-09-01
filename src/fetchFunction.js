//fetch function that load spotify API to pass trought props

export default function fetchFunction() {
  const podcast = [
    {
      episode: "01",
      name: "Test 01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      spotify_url: "https://open.spotify.com/embed/track/0sL7klqtKTaMVVC3CCXwRv"
    },
    {
      episode: "02",
      name: "Test 02",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      spotify_url: "https://open.spotify.com/embed/track/0sL7klqtKTaMVVC3CCXwRv"
    },
    {
      episode: "03",
      name: "Test 03",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      spotify_url: "https://open.spotify.com/embed/track/0sL7klqtKTaMVVC3CCXwRv"
    }
  ];

  return podcast;
}
