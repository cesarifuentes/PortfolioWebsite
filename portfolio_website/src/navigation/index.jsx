import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import ProjectArchive from "../components/ProjectArchive";
import WorkArchive from "../components/WorkArchive";
import Resume from "../components/archive/Resume";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project_archive" element={<ProjectArchive />} />
        <Route path="/work_archive" element={<WorkArchive />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
