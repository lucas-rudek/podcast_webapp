import { useState, useEffect } from "react";
import axios from "axios";

export default function Fetch_function() {
  const api_link =
    "https://api.soundcloud.com/users/450311109/tracks?client_id=z8LRYFPM4UK5MMLaBe9vixfph5kqNA25";
  //z8LRYFPM4UK5MMLaBe9vixfph5kqNA25
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(api_link).then((res) => {
      let podcast = res.data.map((res) => ({
        name: res.title,
        description: res.description,
        image: res.artwork_url,
        uri: res.uri
      }));
      setData(podcast);
    });
  }, []);
  return data;
}
