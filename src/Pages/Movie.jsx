import React from "react";
import { useNavigate } from "react-router-dom";


const Movie = ({ movie, index }) => {
    let navigate = useNavigate();

    function handleMovieNavigation() {
        navigate(`/details/${movie.imdbID}`)
    }

  return (
    <>
      <div className="movie" key={index}>
        <figure className="movie__img--wrapper">
          <img className="movie__poster" src={movie.Poster} onClick={handleMovieNavigation} alt={movie.Title} />
        </figure>
        <div className="movie__title" onClick={handleMovieNavigation}>{movie.Title}</div>
        <div className="movie__year" onClick={handleMovieNavigation}>{movie.Year}</div>
      </div>
    </>
  );
};

export default Movie;
