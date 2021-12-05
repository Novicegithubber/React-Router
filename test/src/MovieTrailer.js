import { useParams } from "react-router-dom";

const MovieTrailer = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Movie trailer {id}</h2>
    </div>
  );
};

export default MovieTrailer;
