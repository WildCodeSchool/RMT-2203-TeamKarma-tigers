import React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

import MovieCarousel from "../components/MovieCarousel";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AllMovies({ sortType }) {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <Box bg="#15141f">
        <Header isOnHome={false} />

        <MovieCarousel
          type="alphabeticalMovies"
          url={`https://api.themoviedb.org/3/discover/movie?sort_by=${sortType}&include_adult=false`}
          isFilterable
        />
        <Footer />
      </Box>
    </motion.div>
  );
}

export default AllMovies;
