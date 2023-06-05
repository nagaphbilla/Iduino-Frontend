import LandingPage from "./LandingPage";
import CourseStructure from "./pages/CourseStructure";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import Video from "./pages/Video";
import "./styles.css";
import Rough from "./pages/Rough";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/courses/courseStructure" element={<CourseStructure />}/>
          <Route path="/courses/courseStructure/videos" element={<Video/>}/>
          <Route path="/signIn" element={<SignInPage/>} />
        </Routes>
      </Router>
      {/* <Rough/> */}
    </div>
  );
}

export default App;
