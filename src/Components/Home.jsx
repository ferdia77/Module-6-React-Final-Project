import React, { useState } from "react";
import Blinker from "../assets/Blinker.png";
import Building from "../assets/Building.png";
import { useNavigate } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";

const Home = () => {
  let navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);

  //   document.getElementById('searchInput').addEventListener('keypress',
  //     (event) => {
  //       if(event.key === 'Enter') {
  //         handleSearch();
  //       }
  //     });

  //     function openSearchResults() {
  //       document.body.classList += "results--searched"
  //     }

  async function fetchMovies(tite) {
    setLoading(true);
    const moviesData = await axios.get(
      `https://omdbapi.com/?s=${searchQuery}&apikey=b59e5615`
    );
    if (moviesData.Search) {
      renderMovies(moviesData.Search); // pass the data to renderMovies
      updateSearchResultsText(searchQuery);
    }
  }

  //     function renderMovies(movies) {
  //       if(!movies) return
  //       const moviesDataWrapper = document.querySelector('.movies');
  //       const myInput = document.querySelector('#searchinput')
  //       moviesDataWrapper.innerHTML = movies
  //       .slice(0, 6).map((movie) => {
  //         return `<div class="movie">
  //                   <figure class="movie__img--wrapper">
  //                       <img src="${movie.Poster}" alt="${movie.Title}">
  //                   </figure>
  //                   <div class="movie__title">
  //                       ${movie.Title}
  //                   </div>
  //                   <div class="movie__year">
  //                       ${movie.Year}
  //                   </div>
//                   </div>`
  //                   })
  //                   .join(''); // Join the array to create a single HTML string
  //     }

  //     function updateSearchResultsText(searchQuery) {
  //       const searchResultsElemnt = document.querySlector ("search__results");
  //       searchResultsElemnt.textContent = searchQuery
  //         ? `Search results for:${searchQuery}`
  //         : "Search for your movie";
  //     }

  function showSpinnerLoadingState(isLoading) {
    const spinner = document.querySelector("fa-spinner");
    if (spinner) {
      spinner.computedStyleMap.display = isLoading ? "block" : "none";
    }
  }

 

  return (
    <>
      <nav className="content__wrapper">
        <div className="blinker">
          <img className="blinker__logo" src={Blinker} alt="blinker logo" />
        </div>
        <div className="nav__links">
          <a className="nav__link" href="">
            {" "}
            Home{" "}
          </a>
          <a className="nav__link" href="/findyourcar">
            {" "}
            Find Your Car{" "}
          </a>
          <a className="btn__contact"> CONTACT </a>
        </div>
      </nav>
      <section>
        <div className="container">
          <div className="row">
            <h1 className="header__description">
              Australia's most awarded <br />
              car subscription platform
            </h1>
            <h2 className="header__find">
              Find Your Dream Car With <span className="purple">Blinker</span>
            </h2>
            <div className="search__button">
              <input
                className="search__bar"
                type="text"
                placeholder="Search your favourite movies"
                id="searchInput"
                onchange="filterMoviesSearch(event)"
              />
              <button
                className="load__search--results"
                onClick="handleSearch()"
              >
                {isLoading}
                <svg
                  data-v-2a11e7ca=""
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="svg-inline--fa fa-search fa-w-16"
                >
                  <path
                    data-v-2a11e7ca=""
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    className=""
                  ></path>
                </svg>
              </button>
            </div>
            <figure className="building__img">
              <img className="img__building" src={Building} alt="" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
