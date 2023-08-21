import { useContext, useEffect } from "react";

import { MoviesContext } from "..";
import MovieCard from "../Components/MovieCard";

const Watchlist = () => {
  const { watchlistMovies, setWatchlistMovies } = useContext(MoviesContext);

  return (
    <div className="watchlist--div">
      <div className="list">
        {watchlistMovies.length > 0 ? (
          watchlistMovies.map((movie) => (
            <MovieCard
              id={movie.id}
              image={movie.imageURL}
              title={movie.title}
              summary={movie.summary}
              key={movie.id}
            />
          ))
        ) : (
          <h4>No movie added to the watchlist yet.</h4>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
