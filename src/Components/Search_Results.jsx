import React, { useEffect, useState } from "react";
import WhiteBlinker from "../assets/WhiteBlinker.png";
import axios from "axios";

const Search_Results = ({ searchValue, setSearchValue }) => {
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    const moviesData = await axios.get(
      `https://omdbapi.com/?s=${searchValue}&apikey=b59e5615`
    );
    console.log(moviesData);
    if (moviesData.data.Search) {
      setMovies(moviesData.data.Search);
    }
  }


  function handleSearch() {
    fetchMovies();
    console.log("Search");
  }

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  //  function renderMovies(movies) {
  //            if(!movies) return
  //            const moviesDataWrapper = document.querySelector('.movies');
  //            const myInput = document.querySelector('#searchinput')
  //            moviesDataWrapper.innerHTML = movies
  //            .slice(0, 6).map((movie) => {
  //              return `<div class="movie">
  //                        <figure class="movie__img--wrapper">
  //                            <img src="${movie.Poster}" alt="${movie.Title}">
  //                        </figure>
  //                        <div class="movie__title">
  //                            ${movie.Title}
  //                        </div>
  //                        <div class="movie__year">
  //                            ${movie.Year}
  //                        </div>
  //                      </div>`
  //                        })
  //                        .join('');
  // }

  return (
    <>
      <div className="navbar__wrapper">
        <div className="overlay"></div>
        <nav className="content__wrapper">
          <div className="blinker">
            <img
              className="blinker__logo"
              src={WhiteBlinker}
              alt="blinker logo"
            />
          </div>
          <div className="nav__links">
            <a className="nav__link--white" href="">
              {" "}
              Home{" "}
            </a>
            <a className="nav__link--white" href="/findyourcar">
              {" "}
              Find Your Favourite Film{" "}
            </a>
            <a className="button__contact"> CONTACT </a>
          </div>
        </nav>
        <h1 className="header__browse">Browse Our Filmbase <br /> We have all your favourites!</h1>
        <div className="search-container">
          <div className="search__btn">
            <input
              className="search__bar--two"
              type="text"
              placeholder="Search your favourite movies"
              id="searchInput"
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <div onClick={handleSearch}>
              <svg
                data-v-2a11e7ca=""
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa-1 fa-search fa-w-16"
              >
                <path
                  data-v-2a11e7ca=""
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <section id="search">
        <div className="container">
          <div className="row">
            <div className="search__filter--wrapper">
              <div className="search__results">
                Search results for "{searchValue}"
              </div>
              <select id="filter">
                <option value="NEW_TO_OLD">Year, New to Old</option>
                <option value="HIGH_TO_LOW">Year, Old to New</option>
              </select>
            </div>
            <div className="movies">
            {movies
                .slice(0, 6).map((movie, index) => {
                    return <div className="movie" key={index}>
                                <figure className="movie__img--wrapper">
                                    <img src={movie.Poster} alt={movie.Title}/>
                                </figure>
                                <div className="movie__title">
                                    {movie.Title}
                                </div>
                                <div className="movie__year">
                                    {movie.Year}
                                </div>
                            </div> 
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search_Results;
