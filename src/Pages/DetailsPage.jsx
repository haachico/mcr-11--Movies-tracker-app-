import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { MoviesContext } from "..";
const DetailsPage = () => {
  const { moviesData } = useContext(MoviesContext);
  const { title } = useParams();

  const selectedMovie = moviesData.find((movie) => movie.title === title);
  console.log(selectedMovie);
  return (
    <div className="main">
      <Link to="/">
        <span style={{ marginRight: "5px" }}>
          <i class="fa-solid fa-arrow-left"></i>
        </span>
        Back
      </Link>
      <div className="details--div">
        <div>
          <img src={selectedMovie?.imageURL} alt={selectedMovie?.title} />
        </div>
        <div>
          <h3>{selectedMovie?.title}</h3>
          <p>{selectedMovie?.summary}</p>
          <p>
            <strong>Year : </strong>
            {selectedMovie?.year}
          </p>
          <p>
            <strong>Genre : </strong>
            {selectedMovie?.genre.join(", ")}
          </p>
          <p>
            <strong>Year : </strong>
            {selectedMovie?.year}
          </p>
          <p>
            <strong>Ratings : </strong>
            {selectedMovie?.rating}
          </p>
          <p>
            <strong>Director : </strong>
            {selectedMovie?.director}
          </p>
          <p>
            <strong>Writer : </strong>
            {selectedMovie?.writer}
          </p>
          <p>
            <strong>Cast : </strong>
            {selectedMovie?.cast.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
