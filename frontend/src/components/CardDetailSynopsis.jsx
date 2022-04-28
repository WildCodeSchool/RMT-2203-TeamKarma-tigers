import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/CardDetailSynopsis.css";
import ReadMore from "./ReadMoreButton";

export default function CardDetailSynopsis({ movie }) {
  const [synopsis, setSynopsis] = useState([]);

  const getMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=20d0a760d82811eb01a3f02b31edc400&language=en-US`
      )
      .then((result) => setSynopsis(result.data));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="detailed-container">
      <div className="synopsis-container">
        <h3>SYNOPSIS</h3>
        <ReadMore>
          A ticking-time-bomb insomniac and a slippery soap salesman channel
          primal male aggression into a shocking new form of therapy. Their
          concept catches on, with underground fight clubs forming in every
          town, until an eccentric gets in the way and ignites an out-of-control
          spiral toward oblivion.
        </ReadMore>
      </div>
      <div className="utility-container">
        <div className="parent">
          <h3 className="release-date">
            {" "}
            RELEASE DATE <br /> <h5>{synopsis.release_date}</h5>
          </h3>
          <h3 className="genre">
            {" "}
            GENRE <br /> <h5>DRAMA</h5>
          </h3>
          <h3 className="popularity">
            {" "}
            POPULARITY <br /> <h5>{synopsis.popularity}</h5>
          </h3>
          <h3 className="revenue">
            {" "}
            REVENUE <br /> <h5>{synopsis.revenue}</h5>
          </h3>
        </div>
      </div>
    </div>
  );
}
