import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Movie = ({ movie, index }) => {
    let navigate = useNavigate();
  return (
    <>
      <div className="movie" key={index}>
        <figure className="movie__img--wrapper">
          <img src={movie.Poster} onClick={navigate} alt={movie.Title} />
        </figure>
        <div className="movie__title">{movie.Title}</div>
        <div className="movie__year">{movie.Year}</div>
      </div>
    </>
  );
};

export default Movie;
