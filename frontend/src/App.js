import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.component";
import Home from "./pages/Home/Home";

function App() {
  const [toggleHeader, setToggleHeader] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToggleHeader(true);
    } else {
      setToggleHeader(false);
    }
  });

  return (
    <Router>
      <Header toggleHeader={toggleHeader} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
