import axios from "axios";
import { useEffect, useState } from "react";
import Video from "./Video";

export default function MovieVideoCarousel({ movie }) {
  const [allVideos, setAllVideos] = useState([]);
  const getVideos = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie}/videos?api_key=20d0a760d82811eb01a3f02b31edc400&language=en-US`
      )
      .then((response) => response.data)
      .then((data) => {
        setAllVideos(data.results);
      });
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div>
      {allVideos.map((video) => (
        <Video videoInfo={video} key={video.key} />
      ))}
    </div>
  );
}
