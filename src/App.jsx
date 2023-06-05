import LandingPage from "./LandingPage";
import CourseStructure from "./pages/CourseStructure";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import Video from "./pages/Video";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/courses/courseStructure" element={<CourseStructure />}/>
          <Route path="/courses/courseStructure/videos" element={<Video/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
