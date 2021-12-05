import React, { useState } from "react";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Wolf of Wall Street",
      description:
        "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government. In the early 1990s, Jordan Belfort teamed with his partner Donny Azoff and started brokerage firm Stratton Oakmont.",
      posterURL:
        "https://m.media-amazon.com/images/I/51MAuTMt+gL._AC_SY300_SX300_.jpg",
    },
    {
      id: 2,
      title: "Interstellar",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      posterURL:
        "https://m.media-amazon.com/images/I/81nSh3pZUDL._AC_UY327_FMwebp_QL65_.jpg",
    },
  ]);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link
            to={`/MovieTrailer/${movie.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h1>{movie.title}</h1>
            <img src={movie.posterURL} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
