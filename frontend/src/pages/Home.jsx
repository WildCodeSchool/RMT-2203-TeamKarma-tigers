import { Box, Flex } from "@chakra-ui/react";
import Searchbar from "../components/Searchbar";
import MovieCarousel from "../components/MovieCarousel";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box bg="#15141f">
      <main>
        <Header isOnHome />
        <Flex
          h="100vh"
          alignItems="center"
          pb="200px"
          bgImage="url('./src/assets/home-background.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          <Box w="100%">
            <Searchbar />
          </Box>
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
