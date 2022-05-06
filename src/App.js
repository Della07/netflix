import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import NavBar from "./components/NavBar";
import TrendPage from "./pages/TrendPage";
import ReleasePage from "./pages/ReleasePage";
import MoviesPage from "./pages/MoviesPage";
import MoviePage from "./pages/MoviePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/movies/:imdbID" element={<MoviePage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/movies" element={<MoviesPage />}>
          <Route path="/movies/trending-now" element={<TrendPage />} />
          <Route path="/movies/new-release" element={<ReleasePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
