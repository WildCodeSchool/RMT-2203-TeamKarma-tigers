import "../styles/CardDetailOverall.css";
import CardDetailSynopsis from "./CardDetailSynopsis";

export default function ApiMovieCard() {
  return (
    <div>
      <div className="main-container">
        <div className="movie-poster">
          <img src="" alt="" />
        </div>
        <div className="flex-column">
          <h2>MOVIE TITLE</h2>
          <h3>MOVIE MINUTES + MOVIE RATING</h3>
          <div className="carousel"> DETAILS REVIEWS SHOWTIME</div>
          <CardDetailSynopsis />
        </div>
      </div>
    </div>
  );
}
