import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import AllMovies from "./pages/AllMovies";
import OneMovie from "./pages/OneMovie";
import Error from "./pages/Error";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<AllMovies />} />
          <Route path="/results" element={<Results />} />
          <Route path="/movies/:movieid" element={<OneMovie />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
