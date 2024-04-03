import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/header";
import Intro from "./pages/intro";
import AboutMe from "./pages/aboutme";
import Projects from "./pages/projects";
import ContactMe from "./pages/contact";

function App() {
  return (
      <Router>
          <div className="App">
              <Header />
              <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/AboutMe" element={<AboutMe />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/ContactMe" element={<ContactMe />} />
                <Route path="*" element={<Intro />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;