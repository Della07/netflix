import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

const API_KEY = "c482aae";

const MoviesPage = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  const getMovies = async () => {
    let page = 1;
    let data = [];
    while (page <= 3) {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=hello&page=${page}`
      );
      const movies = await res.json();
      movies.Search.forEach((movie) => data.push(movie));
      page++;
    }

    setMoviesList(data);
    console.log({ moviesList });
  };

  const getMoviesByTrending = async () => {
    let page = 1;
    let data = [];
    while (page <= 3) {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=star&page=${page}&y=2022`
      );
      const movies = await res.json();
      movies.Search.forEach((movie) => data.push(movie));
      page++;
    }

    setTrendingMovies(data);
    console.log({ trendingMovies });
  };

  useEffect(() => {
    getMovies();
    getMoviesByTrending();
  });

  return (
    <>
      <div>
        <MovieList movies={moviesList} type="New Release" />
        <MovieList movies={trendingMovies} type="Treding" />
      </div>
    </>
  );
};

export default MoviesPage;
