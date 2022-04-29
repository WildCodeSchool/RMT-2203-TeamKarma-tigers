import Searchbar from "../components/Searchbar";
import MovieCarousel from "../components/MovieCarousel";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <main className="App-header">
        <Header isOnHome />
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
      </main>
    </div>
  );
}
