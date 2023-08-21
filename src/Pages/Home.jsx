import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "..";
import MovieCard from "../Components/MovieCard";

const Home = () => {
  const { moviesData, setMoviesData, searchText, openModal } = useContext(
    MoviesContext
  );
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  const handleSelecrGenre = (e) => {
    setSelectedGenre(e.target.value);
  };

  const filteredByGenre =
    selectedGenre === ""
      ? moviesData
      : moviesData.filter((movie) => movie.genre.includes(selectedGenre));

  const handleSelectedYear = (e) => {
    setSelectedYear(e.target.value);
  };

  const filteredByYear =
    selectedYear === "Before 2001"
      ? filteredByGenre.filter((movie) => movie.year <= 2000)
      : selectedYear === "After 2000"
      ? filteredByGenre.filter((movie) => movie.year > 2000)
      : filteredByGenre;

  const handleSelectRating = (e) => {
    setSelectedRating(e.target.value);
  };

  const filteredByRating =
    selectedRating === "5 or less"
      ? filteredByYear.filter((movie) => movie.rating <= 5)
      : selectedRating === "More than 5"
      ? filteredByYear.filter((movie) => movie.rating > 5)
      : filteredByYear;

  const displayedMovies = filteredByRating?.filter((movie) =>
    movie?.title?.toLowerCase().includes(searchText.toLowerCase())
  );

  console.log(displayedMovies, "displayed movies");

  return (
    <div>
      <div className="filters">
        <h3>Movies</h3>
        <div>
          <select value={selectedGenre} onChange={(e) => handleSelecrGenre(e)}>
            <option value="">All genres</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Crime">Crime</option>
            <option value="Adventure">Adventure</option>
            <option value="Romance">Romance</option>
            <option value="Action">Action</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Biography">Biograpy</option>
          </select>
        </div>
        <div>
          <select value={selectedYear} onChange={(e) => handleSelectedYear(e)}>
            <option value="">Year</option>
            <option value="Before 2001">Before 2001</option>
            <option value="After 2000">After 2000</option>
          </select>
        </div>
        <div>
          <select
            value={selectedRating}
            onChange={(e) => handleSelectRating(e)}
          >
            <option value="">Ratings</option>
            <option value="5 or less">5 or less</option>
            <option value="More than 5">More than 5</option>
          </select>
        </div>
        <button onClick={openModal}>Add</button>
      </div>
      <div className="list">
        {displayedMovies.length > 0 ? (
          displayedMovies.map((movie) => (
            <MovieCard
              id={movie.id}
              image={movie.imageURL}
              title={movie.title}
              summary={movie.summary}
              key={movie.id}
            />
          ))
        ) : (
          <h4>No movie found.</h4>
        )}
      </div>
    </div>
  );
};

export default Home;
