import { Box } from "@chakra-ui/react";
import Searchbar from "../components/Searchbar";
import MovieCarousel from "../components/MovieCarousel";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box bg="#15141f" color="white">
      <main>
        <Header isOnHome />
        <Searchbar />
        <h2>This Week Trending Movie</h2>
        <MovieCarousel
          type="thisWeekTrendingMovies"
          url="https://api.themoviedb.org/3/trending/all/week?"
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
}
