import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/header";
import Intro from "./pages/intro";
import AboutMe from "./pages/aboutme";

function App() {
  return (
      <Router>
          <div className="App">
              <Header />
              <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/AboutMe" element={<AboutMe />} />
                <Route path="*" element={<Intro />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;