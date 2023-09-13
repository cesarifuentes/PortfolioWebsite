import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import ProjectArchive from "../components/archive/ProjectArchive";
import WorkArchive from "../components/archive/WorkArchive";
import AboutExtended from "../components/archive/AboutExtended";
import Resume from "../components/archive/Resume";
import { Helmet } from "react-helmet";

const Navigation = () => {
  <Helmet>
    <title>Cesar Fuentes</title>
    <meta
      name="description"
      content="Cesar Fuentes is a software developer who creates engaging, user-friendly online experiences."
    />

    {/* for sharing on other sites */}
    <meta property="og:title" content="Cesar Fuentes" />
    <meta
      property="og:description"
      content="Cesar Fuentes is a software developer who creates engaging, user-friendly online experiences."
    />
    {/* <meta property="og:image" content="url_to_image" /> */}
    <meta property="og:url" content="https://cesarfuentes.com/" />
    <meta property="og:site_name" content="Cesar Fuentes" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="profile" />
    {/* <meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@user" />
<meta name="twitter:creator" content="@user" /> */}
    <meta name="twitter:title" content="Cesar Fuentes" />
    <meta
      name="twitter:description"
      content="Cesar Fuentes is a software developer who creates engaging, user-friendly online experiences."
    />
    <meta name="twitter:image" content="url_to_image" />
    {/* <meta property="fb:app_id" content="ID_APP_FACEBOOK" /> */}
  </Helmet>;

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
