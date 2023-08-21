import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { MoviesContext } from "..";
const SearchInput = () => {
  const { searchText, setSearchText } = useContext(MoviesContext);
  return (
    <Link to="/">
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search--input"
          placeholder="Search with title"
        />
      </div>
    </Link>
  );
};

export default SearchInput;
