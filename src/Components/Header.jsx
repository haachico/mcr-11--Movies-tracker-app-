import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <div className="header">
      <h2>
        <Link to="/"> My Movies Tracker.</Link>
      </h2>
      <SearchInput />

      <nav>
        <Link to="/">All movies</Link>
        <Link to="/watchlist">Watchlist</Link>

        <Link to="/starred">Starred</Link>
      </nav>
    </div>
  );
};

export default Header;
