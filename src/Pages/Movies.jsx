import React from "react";
import axios from "axios";
const [movies, setMovies] = useState([]);

const Movies = () => {
    async function fetchMovies() {
        const moviesData = await axios.get(
          `https://omdbapi.com/?s=${searchValue}&apikey=b59e5615`
        );
        console.log(moviesData);
        if (moviesData.data.Search) {
          setMovies(moviesData.data.Search);
        }
      }

  return (
    <>
      <div className="Movies">
        {movies.slice(0, 6).map((movie) => {
          return (
            <div class="movie">
              <figure class="movie__img--wrapper">
                <img src={movie.Poster} alt={movie.Title} />
              </figure>
              <div class="movie__title">{movie.Title}</div>
              <div class="movie__year">{movie.Year}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movies;
