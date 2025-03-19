import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import skeleton from "../assets/skeleton__img.png"

const Details = () => {
    const { imdbID } = useParams()
    const[movieId, setMovieId] = useState([])
    const[loading, setLoading] = useState(false)


    useEffect(() => {
        async function fetchImdbID() {
            setLoading(true);
            try{
                const response = await axios.get(
                    `https://omdbapi.com/?i=${imdbID}&page=1&apikey=e3aee4a2`
                    );
                    setMovieId(response.data)
                    setLoading(false);
            } catch (error) {
                console.error("Error fetching movie data:", error)
            }
            
        }
        fetchImdbID();
    }, [imdbID])

    

  return (
    <div className="row__details">
        {loading ? ( 
            <>
            <div className="movies__wrapper">
                <figure>
                    <img className="poster__skeleton" src={skeleton} alt="" />
                </figure>
            </div>

            <div className="movies__wrapper">
                <div className="post__title--skeleton"></div>
                <div className="post__title--skeleton"></div>
                <div className="post__title--skeleton"></div>
                <div className="post__title--skeleton"></div>
                <div className="post__title--skeleton"></div>
                <div className="post__title--skeleton"></div>
            </div>
        </>) :
        (<>
            <div className="movies__wrapper">
                <figure className="movie__poster">
                    <img
                        className="movie__poster--size"
                    src={movieId.Poster}
                    alt={movieId.Title}
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
        </>)
        }
       

        
    </div>
  );
};

export default Details;
