import { Box, Flex } from "@chakra-ui/react";
import SearchbarMaxi from "../components/SearchbarMaxi";
import MovieCarousel from "../components/MovieCarousel";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box bg="#15141f" w="100vw">
      <main>
        <Header isOnHome />
        <Flex
          w="100vw"
          h="100vh"
          alignItems="center"
          bgImage="url('./src/assets/home-background.jpg')"
          bgPosition="center"
          bgSize="cover"
        >
          <SearchbarMaxi />
        </Flex>
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
