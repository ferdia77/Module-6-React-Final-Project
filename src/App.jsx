import { BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import Home from "./Components/Home";
import Search_Results from "./Components/Search_Results";
import { useEffect, useState } from "react";
import Spinner from "./Components/Spinner";
import Details from "./Components/Details";




function App() {
  const [searchValue, setSearchValue] = useState("")
  const [movies, setMovies] = useState([]);
  
  

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home setSearchValue={setSearchValue} /> }  />
          <Route path="/Search_Results" element={<Search_Results setSearchValue={setSearchValue} searchValue={searchValue}  movies={movies} setMovies={setMovies} />} />
          <Route path="/Spinner" element={<Spinner />} />
          <Route path="/Details/:imdbID" element={<Details setSearchValue={setSearchValue}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
