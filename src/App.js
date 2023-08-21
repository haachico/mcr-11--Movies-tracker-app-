import "./styles.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Watchlist from "./Pages/Watchlist";
import Starred from "./Pages/Starred";
import DetailsPage from "./Pages/DetailsPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="starred" element={<Starred />} />
          <Route path="details/:title" element={<DetailsPage />} />
        </Route>
      </Routes>
    </div>
  );
}
