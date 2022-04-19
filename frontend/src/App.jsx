import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import AllMovies from "./pages/AllMovies";
import OneMovie from "./pages/OneMovie";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        {/* nav */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allmovies" element={<AllMovies />} />
          <Route path="/allmovies/results" element={<Results />} />
          <Route path="/allmovies/:movieid" element={<OneMovie />} />
        </Routes>
      </Router>
      <Home />
    </div>
  );
}

export default App;
