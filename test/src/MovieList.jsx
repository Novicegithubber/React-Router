import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
const MovieList = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Wolf of Wall Street",
      description:
        "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government. In the early 1990s, Jordan Belfort teamed with his partner Donny Azoff and started brokerage firm Stratton Oakmont.",
      posterURL:
        "https://m.media-amazon.com/images/I/51MAuTMt+gL._AC_SY300_SX300_.jpg",
      trailer: "https://www.youtube.com/embed/iszwuX1AK6A",
    },
    {
      id: 2,
      title: "Interstellar",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      posterURL:
        "https://m.media-amazon.com/images/I/81nSh3pZUDL._AC_UY327_FMwebp_QL65_.jpg",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: 3,
      title: "Django Unchained",
      description:
        "When Django, a slave, is freed, he joins forces with a bounty hunter to rescue his wife, who has been enslaved by Calvin, a hard-hearted plantation owner.",
      posterURL:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnm2FczCxSnt69XUZqqI5-sfy66SvjiV0du9mfUKRRCGqVAurt",
      trailer: "https://www.youtube.com/embed/0fUCuvNlOCg",
    },
  ]);

  return (
    <div className="movie-cards">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="card"
          onClick={() =>
            navigate(`/Movietrailer/${movie.id}`, { state: movie })
          }
        >
          <div
            className="movie-card"
            style={{ textDecoration: "none", color: "grey" }}
          >
            <h1>{movie.title}</h1>
            <img src={movie.posterURL} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
