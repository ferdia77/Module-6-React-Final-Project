import React from 'react'

const Movie = () => {
  return (
    <>
      <div class="movie">
        <figure class="movie__img--wrapper">
            <img src="${movie.Poster}" alt="${movie.Title}" />
        </figure>
        <div class="movie__title">
            ${movie.Title}
        </div>
        <div class="movie__year">
            ${movie.Year}
        </div>
        </div>
    </>
  )
}

export default Movie
