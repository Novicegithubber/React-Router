import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ description, title, img, id }) => {
  return (
    <>
      <Link to={`/MovieTrailer/${id}`}>
        <h6>{title}</h6>
        <div>
          <img src={img} alt="poster" />
        </div>
        <p>{description}</p>
      </Link>
    </>
  );
};

export default MovieCard;
