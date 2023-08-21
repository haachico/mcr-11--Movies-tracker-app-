import { createContext, useState, useEffect } from "react";
import { movies } from "../db/data";
import { v4 as uuid } from "uuid";

export const MoviesContext = createContext();

export const MoviesContextProvider = ({ children }) => {
  const [moviesData, setMoviesData] = useState(movies);
  const [watchlistMovies, setWatchlistMovies] = useState([]);
  const [starredMovies, setStarredMovies] = useState([]);
  // const [displayedMovies, setDisplayedMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editMovie, setEditMovie] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [movie, setMovie] = useState({
    id: uuid(),
    title: "",
    summary: "",
    year: "",
    genre: "",
    rating: "",
    director: "",
    writer: "",
    cast: ""
  });

  const handleAddToWatchlist = (id) => {
    const addedToWatchList = moviesData.find((movie) => movie.id === id);

    const updatedWatchist = [...watchlistMovies, addedToWatchList];

    setWatchlistMovies(updatedWatchist);
    localStorage.setItem("watchlistMovies", JSON.stringify(updatedWatchist));
  };

  const handleAddToStarred = (id) => {
    const addedToStarred = moviesData.find((movie) => movie.id === id);
    const updatedStarredMovies = [...starredMovies, addedToStarred];
    setStarredMovies(updatedStarredMovies);
    localStorage.setItem("starredMovies", JSON.stringify(updatedStarredMovies));
  };

  const handleRemoveFromWatchlist = (id) => {
    const updatedWatchist = watchlistMovies.filter((movie) => movie.id !== id);

    setWatchlistMovies(updatedWatchist);
    localStorage.setItem("watchlistMovies", JSON.stringify(updatedWatchist));
  };

  const handleRemoveFromStarred = (id) => {
    const updatedStarredMovies = starredMovies.filter(
      (movie) => movie.id !== id
    );
    setStarredMovies(updatedStarredMovies);
    localStorage.setItem("starredMovies", JSON.stringify(updatedStarredMovies));
  };

  const handleDelete = (id) => {
    const updatedAllMovies = moviesData.filter((movie) => movie.id !== id);

    const updatedStarredMovies = starredMovies.filter(
      (movie) => movie.id !== id
    );

    const updatedWatchlist = watchlistMovies.filter((movie) => movie.id !== id);

    setMoviesData(updatedAllMovies);
    setStarredMovies(updatedStarredMovies);
    setWatchlistMovies(updatedWatchlist);

    localStorage.setItem("moviesData", JSON.stringify(updatedAllMovies));
    localStorage.setItem("starredMovies", JSON.stringify(updatedStarredMovies));
    localStorage.setItem("watchlistMovies", JSON.stringify(updatedWatchlist));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isEditMode) {
      setEditMovie((prevState) => {
        return {
          ...prevState,
          [name]: value
        };
      });
    } else {
      setMovie((prevState) => {
        return {
          ...prevState,
          [name]: value
        };
      });
    }
  };

  const handleAddMovie = () => {
    if (isEditMode) {
      const updatedMovies = moviesData.map((movie) =>
        movie.id === editMovie.id ? editMovie : movie
      );

      const updatedStarredMovies = starredMovies.map((movie) =>
        movie.id === editMovie.id ? editMovie : movie
      );

      const updatedWatchist = watchlistMovies.map((movie) =>
        movie.id === editMovie.id ? editMovie : movie
      );
      setMoviesData(updatedMovies);
      setStarredMovies(updatedStarredMovies);
      setWatchlistMovies(updatedWatchist);

      localStorage.setItem("moviesData", JSON.stringify(updatedMovies));
      localStorage.setItem(
        "starredMovies",
        JSON.stringify(updatedStarredMovies)
      );
      localStorage.setItem("watchlistMovies", JSON.stringify(updatedWatchist));

      setEditMovie({
        title: "",
        summary: "",
        year: "",
        genre: "",
        rating: "",
        director: "",
        writer: "",
        cast: ""
      });
      setIsEditMode(false);
    } else {
      if (
        !Object.keys(movie).every(
          (key) => movie.hasOwnProperty(key) && movie[key] !== ""
        )
      )
        return;
      const updatedMovies = [...moviesData, movie];
      setMoviesData(updatedMovies);

      localStorage.setItem("moviesData", JSON.stringify(updatedMovies));

      setMovie({
        title: "",
        summary: "",
        year: "",
        genre: "",
        rating: "",
        director: "",
        writer: "",
        cast: ""
      });
    }

    setIsModalOpen(false);
  };

  const handleEdit = (id) => {
    console.log("Working");
    setIsModalOpen(true);
    setIsEditMode(true);
    const toEditRecipe = moviesData.find((movie) => movie.id === id);
    setEditMovie(toEditRecipe);
  };

  useEffect(() => {
    const storedMoviesData = localStorage.getItem("moviesData");

    if (storedMoviesData) {
      setMoviesData(JSON.parse(storedMoviesData));
    }
  }, []);

  useEffect(() => {
    const storedWatchlistMovies = localStorage.getItem("watchlistMovies");

    if (storedWatchlistMovies) {
      setWatchlistMovies(JSON.parse(storedWatchlistMovies));
    }
  }, []);

  useEffect(() => {
    const storedStarredMovies = localStorage.getItem("starredMovies");

    if (storedStarredMovies) {
      setStarredMovies(JSON.parse(storedStarredMovies));
    }
  }, []);
  return (
    <div>
      <MoviesContext.Provider
        value={{
          moviesData,
          setMoviesData,
          watchlistMovies,
          setWatchlistMovies,
          starredMovies,
          setStarredMovies,
          handleAddToWatchlist,
          handleRemoveFromWatchlist,
          handleAddToStarred,
          handleRemoveFromStarred,
          handleDelete,
          searchText,
          setSearchText,
          movie,
          setMovie,
          isModalOpen,
          setIsModalOpen,
          isEditMode,
          setEditMovie,
          handleChange,
          handleEdit,
          handleAddMovie,
          editMovie,
          openModal,
          closeModal
        }}
      >
        {children}
      </MoviesContext.Provider>
    </div>
  );
};
