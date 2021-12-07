import { useLocation } from "react-router";
import "./styles.css";

const MovieTrailer = (props) => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="movie-trailer">
      <h2>{state.title}</h2>

      <iframe
        width="956"
        height="538"
        src={state.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <p>{state.description}</p>
    </div>
  );
};

export default MovieTrailer;
