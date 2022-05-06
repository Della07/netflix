import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MoviePage = ({ data }) => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState({});
  const API_KEY = "c482aae";

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`)
      .then((res) => res.json())
      .then(setMovie);
  }, [imdbID]);

  if (!movie) return <h1>Article does not exist!</h1>;

  // const otherArticles = articleContent.filter(
  //   (article) => article.name !== name
  // );

  console.log("movieee", movie);

  return (
    <>
      <div className="my-3">
        <h1>{movie.Title}</h1>
        <img
          style={{ maxheight: 700, maxWidth: 700 }}
          className="my-2"
          alt=""
          src={movie.Poster}
        />
        {/* <div style={{ textAlign: "left" }} className="px-5">
          {movie.content.map((paragraph, key) => (
            <p key={key} className="">
              {paragraph}
            </p>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default MoviePage;
