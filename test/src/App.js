import MovieList from "./MovieList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import MovieTrailer from "./MovieTrailer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<MovieList />} />
        <Route path="/Movietrailer/:id" element={<MovieTrailer />} />
      </Routes>
    </Router>
  );
}

export default App;
