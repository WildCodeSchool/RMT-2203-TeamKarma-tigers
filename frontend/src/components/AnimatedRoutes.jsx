import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import Results from "../pages/Results";
import AllMovies from "../pages/AllMovies";
import GetInspired from "../pages/GetInspired";
import OneMovie from "../pages/OneMovie";
import Error from "../pages/Error";
import PopularMovies from "../pages/PopularMovies";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={<AllMovies sortType="original_title.asc" />}
        />
        <Route
          path="/popular"
          element={<PopularMovies sortType="popularity.desc" />}
        />
        <Route path="/get-inspired" element={<GetInspired />} />
        <Route path="/results/:search" element={<Results />} />
        <Route path="/movies/:movieid" element={<OneMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
