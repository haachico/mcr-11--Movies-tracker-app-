import { useContext, useEffect } from "react";

import { MoviesContext } from "..";
import MovieCard from "../Components/MovieCard";

const Starred = () => {
  const { starredMovies, setStarredMovies } = useContext(MoviesContext);

  return (
    <div className="starred--div">
      <div className="list">
        {starredMovies.length > 0 ? (
          starredMovies.map((movie) => (
            <MovieCard
              id={movie.id}
              image={movie.imageURL}
              title={movie.title}
              summary={movie.summary}
              key={movie.id}
            />
          ))
        ) : (
          <h4>No movie starred yet. </h4>
        )}
      </div>
    </div>
  );
};

export default Starred;
