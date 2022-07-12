import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.component";
import Ask from "./pages/Ask/Ask";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Question from "./pages/Question/Question";
import Trending from "./pages/Trending/Trending";

function App() {
  const [toggleHeader, setToggleHeader] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToggleHeader(true);
    } else {
      setToggleHeader(false);
    }
  }, []);

  return (
    <Router>
      <Header toggleHeader={toggleHeader} setToggleHeader={setToggleHeader} />
      <Routes>
        <Route path="/" element={<Home setToggleHeader={setToggleHeader} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/question/:questionId" element={<Question />} />
      </Routes>
    </Router>
  );
}

export default App;
