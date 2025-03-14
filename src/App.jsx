import { BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import Home from "./Components/Home";
import Search_Results from "./Components/Search_Results";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search_Results" element={<Search_Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
