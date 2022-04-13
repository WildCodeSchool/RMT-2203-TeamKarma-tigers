import "../styles/CardDetail.css";

export default function CardDetail({ movie }) {
  return (
    <div className="main-container">
      <div className="movie-poster">
        <img src="" alt="" />
      </div>
      <h2>{movie.original_title}</h2>
    </div>
  );
}
