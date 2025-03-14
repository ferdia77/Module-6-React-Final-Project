import { BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import Home from "./Components/Home";
import Search_Results from "./Components/Search_Results";
import { useEffect, useState } from "react";




function App() {
  const [searchValue, setSearchValue] = useState("")

  

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home setSearchValue={setSearchValue} /> }  />
          <Route path="/Search_Results" element={<Search_Results setSearchValue={setSearchValue} searchValue={searchValue} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
