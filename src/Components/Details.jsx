import React, { useEffect, useState } from "react";
import axios from "axios";

const Details = () => {
    const[movieId, setMovieId] = useState([]);

    async function fetchImdbID() {
        const movieImdbId = await axios.get(
            `https://omdbapi.com/?s=fast&page=1&apikey=e3aee4a2`
            );
            console.log(movieImdbId)
            if (movieImdbId.imdbID) {
                setMovieId(movieImdbId.imdbID)
            }
    }

    useEffect(() => {
        console.log(movieId)
    }, [movieId])

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
          <div className="movie__details">"Title": "The Fast and the Furious"</div>
          <div className="movie__details">"Year": "2001"</div>
          <div className="movie__details">"Genre": "Action, Crime, Thriller"</div>
          <div className="movie__details"> "Director": "Rob Cohen"</div>
          <div className="movie__details">"Actors": "Vin Diesel, Paul Walker, Michelle Rodriguez"</div>
          <div className="movie__details">
            "Plot": "Los Angeles police officer Brian O'Conner must decide where
            his loyalty really lies when he becomes enamored with the street
            racing world he has been sent undercover to end it."
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
