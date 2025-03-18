import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
    const { imdbID } = useParams()
    const[movie, setMovie] = useState([])


    useEffect(() => {
        async function fetchImdbID() {
            const movieImdbId = await axios.get(
                `https://omdbapi.com/?i=${imdbID}&page=1&apikey=e3aee4a2`
                );
                setMovie(movieImdbId)
                console.log(movieImdbId)
        }
        fetchImdbID()
    }, [])

    

  return (
    <div className="row__details">
      <div className="div__wrapper">
        <div className="movies__wrapper">
          <figure className="movie__poster">
            <img
                className="movie__poster--size"
              src="https://m.media-amazon.com/images/M/MV5BZGRiMDE1NTMtMThmZS00YjE4LWI1ODQtNjRkZGZlOTg2MGE1XkEyXkFqcGc@._V1_SX300.jpg"
              alt=""
            />
          </figure>
        </div>

        <div className="movies__wrapper">
          <div className="movie__details">{movie.data.Title}</div>
          <div className="movie__details">{movie.data.Year}</div>
          <div className="movie__details">{movie.data.Genre}</div>
          <div className="movie__details">{movie.data.Director}</div>
          <div className="movie__details">{movie.data.Actors}</div>
          <div className="movie__details">{movie.data.Plot}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
