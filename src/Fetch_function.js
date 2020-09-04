import { useState, useEffect } from "react";
import axios from "axios";

export default function Fetch_function() {
  const api_link =
    "https://api.soundcloud.com/playlists/334671843?client_id=1dff55bf515582dc759594dac5ba46e9";
  //z8LRYFPM4UK5MMLaBe9vixfph5kqNA25
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(api_link)
      .then((res) => {
        let podcast = res.data.tracks.map((res, index) => ({
          episode: index + 1,
          name: res.title,
          description: res.description,
          image: res.artwork_url,
          uri: res.uri
        }));
        setData(podcast);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return data;
}
