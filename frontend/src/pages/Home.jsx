import Searchbar from "../components/Searchbar";
import CardCastingCarousel from "../components/Casting/CardCastingCarousel";
import CardReviewCarousel from "../components/CardReviewCarousel";
import MovieCarousel from "../components/MovieCarousel";
import MovieVideoCarousel from "../components/MovieVideoCarousel";
import CardDetailSynopsis from "../components/CardDetailSynopsis";

export default function Home() {
  return (
    <header className="App-header">
      <Searchbar />

      <h1>Popular Movie</h1>
      <MovieCarousel
        type="popularMovies"
        url="https://api.themoviedb.org/3/movie/popular?"
      />
      <h2>This Week Trending Movie</h2>
      <MovieCarousel
        type="thisWeekTrendingMovies"
        url="https://api.themoviedb.org/3/trending/all/week?"
      />
      <h2>All Movie</h2>
      <MovieCarousel
        type="alphabeticalMovies"
        url="https://api.themoviedb.org/3/discover/movie?sort_by=original_title.asc&include_adult=false"
      />
      <CardDetailSynopsis />
      <CardReviewCarousel movie={11} />
      <CardCastingCarousel movie={11} />
      <MovieVideoCarousel movie={11} />
    </header>
  );
}
