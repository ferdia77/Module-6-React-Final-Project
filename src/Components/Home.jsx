import React, { useState } from "react";
import Blinker from "../assets/Blinker.png";
import Building from "../assets/Building.png";
import { useNavigate } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Popcorn from "../assets/Popcorn.png"
import Flics from "../assets/Flics.png"


const Home = ({ setSearchValue }) => {
  let navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  

  function handleSearch() {
    console.log("Search")
    navigate('/Search_Results')
  }

  

  function showSpinnerLoadingState(isLoading) {
    const spinner = ("fa-spinner");
    if (spinner) {
      spinner.computedStyleMap.display = isLoading ? "block" : "none";
    }
  }

  
 

  return (
    <>
      <nav className="content__wrapper">
        <div className="popcorn">
          <img className="popcorn__logo" src={Popcorn} alt="popcorn img" />
        </div>
        <div className="nav__links">
          <a className="nav__link" href="">
            {" "}
            Home{" "}
          </a>
          <a className="nav__link no-cursor" >
            {" "}
            Find Your Favourite Film{" "}
          </a>
          <a className="btn__contact"> CONTACT </a>
        </div>
      </nav>
      <section>
        <div className="container">
          <div className="row">
            <h1 className="header__description">
              Your Favourite Films <br />
              A Click Away
            </h1>
            
            <div className="search__button">
              <input
                className="search__bar"
                type="text"
                placeholder="Search your favourite movies"
                id="searchInput"
                onChange={(event) => setSearchValue(event.target.value)}
              />
              <button
                className="load__search--results"
                onClick={handleSearch}
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
                  className="svg-inline--fa fa-search fa-w-16"
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
            <figure className="flics__img">
              <img className="img__flics" src={Flics} alt="" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
