import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import ProjectArchive from "../components/archive/ProjectArchive";
import WorkArchive from "../components/archive/WorkArchive";
import AboutExtended from "../components/archive/AboutExtended";
import Resume from "../components/archive/Resume";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project_archive" element={<ProjectArchive />} />
        <Route path="/work_archive" element={<WorkArchive />} />
        <Route path="/about_extended" element={<AboutExtended />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
