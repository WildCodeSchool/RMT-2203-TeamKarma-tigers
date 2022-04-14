import Counter from "../components/Counter";
import logo from "../assets/logo.svg";

import MovieCarousel from "../components/MovieCarousel";
import CardReviewCarousel from "../components/CardReviewCarousel";
import Searchbar from "@components/Searchbar";

export default function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React !</p>

      <Counter />
      <Searchbar />

      <p>
        Edit <code>App.jsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {" | "}
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>

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
      <CardReviewCarousel movie={550} />
    </header>
  );
}
