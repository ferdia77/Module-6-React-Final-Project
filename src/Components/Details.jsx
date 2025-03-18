import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
    const { imdbID } = useParams()
    const[movie, setMovie] = useState([])


    useEffect(() => {
        async function fetchImdbID() {
            try{
                const movieImdbId = await axios.get(
                    `https://omdbapi.com/?i=${imdbID}&page=1&apikey=e3aee4a2`
                    );
                    setMovie(movieImdbId)
            } catch (error) {
                console.error("Error fetching movie data:", error)
            }
            
        }
        fetchImdbID()
    }, [imdbID])

    

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
          <div className="movie__details"><span className="title__size">Title:</span> {movie.Title}</div>
          <div className="movie__details"><span className="title__size">Year:</span> {movie.Year}</div>
          <div className="movie__details"><span className="title__size">Genre:</span> {movie.Genre}</div>
          <div className="movie__details"><span className="title__size">Director:</span> {movie.Director}</div>
          <div className="movie__details"><span className="title__size">Actors:</span> {movie.Actors}</div>
          <div className="movie__details plot__details"><span className="title__size">Plot:</span> <br /> <br />{movie.Plot}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
