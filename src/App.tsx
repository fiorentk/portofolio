import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import SkillsAndCourses from "./components/SkillsAndCourses";

function App() {
  return (
    <Router>
      <Nav />
      {/* Push content below fixed navbar */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skillsandcourses" element={<SkillsAndCourses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
