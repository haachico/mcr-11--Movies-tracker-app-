import { useContext } from "react";
import { MoviesContext } from "..";
import MovieModal from "./MovieModal";
import { Link } from "react-router-dom";
const MovieCard = ({ image, title, summary, id }) => {
  const {
    watchlistMovies,
    starredMovies,
    handleAddToStarred,
    handleRemoveFromStarred,
    handleAddToWatchlist,
    handleRemoveFromWatchlist,
    handleDelete,
    handleEdit
  } = useContext(MoviesContext);

  const watchedIcon = <i class="fa-solid fa-clock"></i>;
  const toWatchIcon = <i class="fa-regular fa-clock"></i>;
  const starredicon = <i class="fa-solid fa-star"></i>;
  const toStarIcon = <i class="fa-regular fa-star"></i>;

  return (
    <div>
      <div className="movie--card">
        {watchlistMovies.map((movie) => movie.id === id).includes(true) ? (
          <span
            className="watch--icon"
            onClick={() => handleRemoveFromWatchlist(id)}
          >
            {watchedIcon}
          </span>
        ) : (
          <span
            className="watch--icon"
            onClick={() => handleAddToWatchlist(id)}
          >
            {toWatchIcon}{" "}
          </span>
        )}
        <span className="delete--icon" onClick={() => handleDelete(id)}>
          <i class="fa-regular fa-trash-can"></i>
        </span>
        <span className="edit--icon" onClick={() => handleEdit(id)}>
          <i class="fa-regular fa-pen-to-square"></i>
        </span>

        {starredMovies.map((movie) => movie.id === id).includes(true) ? (
          <span
            className="star--icon"
            onClick={() => handleRemoveFromStarred(id)}
          >
            {" "}
            {starredicon}
          </span>
        ) : (
          <span className="star--icon" onClick={() => handleAddToStarred(id)}>
            {toStarIcon}{" "}
          </span>
        )}

        <img src={image} alt={title} />
        <Link to={`/details/${title}`}>
          <h3 style={{ textDecoration: "underline" }}>{title}</h3>
        </Link>
        <p>{summary}</p>
      </div>

      <MovieModal />
    </div>
  );
};

export default MovieCard;
