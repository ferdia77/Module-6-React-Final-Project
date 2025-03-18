import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = ({ movie }) => {
    const { imdbID } = useParams()
    const[movieId, setMovieId] = useState([])


    useEffect(() => {
        async function fetchImdbID() {
            try{
                const response = await axios.get(
                    `https://omdbapi.com/?i=${imdbID}&page=1&apikey=e3aee4a2`
                    );
                    setMovieId(response.data)
            } catch (error) {
                console.error("Error fetching movie data:", error)
            }
            
        }
        fetchImdbID();
    }, [imdbID])

    

  return (
    <div className="row__details">
      <div className="div__wrapper">
        <div className="movies__wrapper">
          <figure className="movie__poster">
            <img
                className="movie__poster--size"
              src={movie.Poster}
              alt={movie.Title}
            />
          </figure>
        </div>

        <div className="movies__wrapper">
          <div className="movie__details"><span className="title__size">Title:</span> {movieId.Title}</div>
          <div className="movie__details"><span className="title__size">Year:</span> {movieId.Year}</div>
          <div className="movie__details"><span className="title__size">Genre:</span> {movieId.Genre}</div>
          <div className="movie__details"><span className="title__size">Director:</span> {movieId.Director}</div>
          <div className="movie__details"><span className="title__size">Actors:</span> {movieId.Actors}</div>
          <div className="movie__details plot__details"><span className="title__size">Plot:</span> <br /> <br />{movieId.Plot}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
