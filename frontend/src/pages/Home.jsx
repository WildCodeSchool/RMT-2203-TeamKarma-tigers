import Searchbar from "../components/Searchbar";
import MovieCarousel from "../components/MovieCarousel";

// Créer pages + routes
// Home (navbar)
// AllMovies (caroussel a->z) (navbar)
// Results (Suite à searchBar) (navbar)
// OneMovie
// 404 Page

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
    </header>
  );
}
