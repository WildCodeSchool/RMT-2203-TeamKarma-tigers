import { Box, Flex, Heading } from "@chakra-ui/react";
import SearchbarMaxi from "../components/SearchbarMaxi";
import MovieCarousel from "../components/MovieCarousel";
import Arrow from "../components/Arrow";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box bg="#15141f" w="100vw" overflow="hidden">
      <main>
        <Header isOnHome />
        <Flex
          w="100vw"
          h="100vh"
          alignItems="center"
          bgImage="url('./src/assets/home-background2.jpg')"
          bgSize="cover"
          flexDirection="column"
          justifyContent="center"
        >
          <Box w="100%" zIndex="500">
            <SearchbarMaxi />
          </Box>
          <Arrow />
        </Flex>
        <Heading
          as="h2"
          fontSize={{ base: "25px", sm: "30px", md: "40px", lg: "50px" }}
          color="white"
          mt="30px"
          mb="30px"
        >
          Trending movies of the week
        </Heading>
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
