import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import AllMovies from "./pages/AllMovies";
import GetInspired from "./pages/GetInspired";
import OneMovie from "./pages/OneMovie";
import Error from "./pages/Error";
import PopularMovies from "./pages/PopularMovies";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
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
    </div>
  );
}

export default App;
