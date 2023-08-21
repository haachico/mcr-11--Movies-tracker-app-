import Modal from "./Modal";
import { useState, useContext } from "react";
import { MoviesContext } from "..";
const MovieModal = () => {
  const {
    movie,
    isModalOpen,
    closeModal,
    isEditMode,
    editMovie,
    handleChange,
    handleAddMovie
  } = useContext(MoviesContext);

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="movie--modal">
          <div>
            <label htmlFor="title">Title : </label>
            <input
              id="title"
              type="text"
              name="title"
              value={isEditMode ? editMovie.title : movie.title}
              onChange={handleChange}
            />
            <label htmlFor="summary">Summary : </label>
            <input
              id="summary"
              type="text"
              name="summary"
              value={isEditMode ? editMovie.summary : movie.summary}
              onChange={handleChange}
            />
            <label htmlFor="year">Year : </label>
            <input
              id="year"
              type="text"
              name="year"
              value={isEditMode ? editMovie.year : movie.year}
              onChange={handleChange}
            />
            <label htmlFor="genre">Genre : </label>
            <input
              id="genre"
              type="text"
              name="genre"
              value={isEditMode ? editMovie.genre : movie.genre}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="rating">Rating : </label>
            <input
              id="rating"
              type="number"
              name="rating"
              value={isEditMode ? editMovie.rating : movie.rating}
              onChange={handleChange}
            />
            <label htmlFor="director">Director : </label>
            <input
              id="director"
              type="text"
              name="director"
              value={isEditMode ? editMovie.director : movie.director}
              onChange={handleChange}
            />
            <label htmlFor="writer">Writer : </label>
            <input
              id="writer"
              type="text"
              name="writer"
              value={isEditMode ? editMovie.writer : movie.writer}
              onChange={handleChange}
            />
            <label htmlFor="cast">Cast : </label>
            <input
              id="cast"
              type="text"
              name="cast"
              value={isEditMode ? editMovie.cast : movie.cast}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="add--btn" onClick={() => handleAddMovie()}>
          {isEditMode ? "Save" : "Add"}
        </button>
      </Modal>
    </div>
  );
};

export default MovieModal;
