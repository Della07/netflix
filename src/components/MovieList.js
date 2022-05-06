import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies, type }) => {
  console.log("movies", movies);

  if (!movies) {
    return null;
  }

  return (
    <>
      <div className="my-3">
        <h2 style={{ textAlign: "center" }} className="my-2">
          {type}
        </h2>
        <div class="about-row px-5">
          {movies.map((movie, key) => (
            <Link key={key} to={`/movies/${movie.imdbID}`}>
              <div class="about-column" style={{ color: "black" }}>
                <div class="about-card">
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    style={{ height: 400 }}
                  />
                  <div class="about-container">
                    <h2>{movie.Title}</h2>
                    <p class="about-title">{movie.Year}</p>
                    <p>{}</p>

                    <p>
                      <button class="about-button">Play</button>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
