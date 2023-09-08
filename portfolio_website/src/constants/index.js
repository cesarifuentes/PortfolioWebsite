// images
import space_sim from "../assets/space_sim.png";
import replace_me from "../assets/replace_me.png"; // spotify_arcade.png
import spotify_arcade from "../assets/spotifyarcade.png"; // spotify_arcade.png
import huastecas from "../assets/huastecas.png"; // huastecas.png
// experience cards
import tamu from "../assets/tamu.png";
import publicis from "../assets/publicis.png";
// resume
import pdf from "../assets/F_Cesar_Resume_Sep2023.pdf";
// social logos
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

// TODO: update these links and stuff

export const socialMedias = [
  {
    id: "social-media-1",
    name: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/cesarivanfuentes/",
  },
  {
    id: "social-media-2",
    name: "github",
    icon: github,
    link: "https://github.com/cesarifuentes",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Replace Me",
    description:
      "An iOS app that helps people remember to replace commonly disregarded household items. In production.",
    link: "",
    image: replace_me,
    isNew: true,
  },
  {
    id: "project-2",
    title: "Las Huastecas",
    description:
      "A full stack e-commerce website for a local Mexican restaurant. In production.",
    link: "",
    image: huastecas,
    isNew: true,
  },
  {
    id: "project-3",
    title: "Spotify Arcade",
    description:
      "A full stack web app using the Spotify API that lets friends compete to see who knows each others music taste the best. In production.",
    link: "",
    image: spotify_arcade,
    isNew: false,
  },
  {
    id: "project-4",
    title: "Space Simulation",
    description:
      "A 3D OpenGL video game engine in C++ that simulates the physical movement of particles in space.",
    link: "https://people.engr.tamu.edu/sueda/courses/CSCE450/2022F/projects/Cesar_Fuentes/index.html",
    image: space_sim,
    isNew: false,
  },
];

export const experiences = [
  {
    id: "experience-1",
    title: "Software Engineer Intern",
    company: "Publicis Sapient",
    // description:
    //   "Collaborated with engineering and product management interns to develop a digital, full-stack solution for a client.",
    image: publicis,
    date: "JUNE –– AUG 2022",
  },
  {
    id: "experience-2",
    title: "B.S. in Computer Science",
    company: "Texas A&M University",
    // description:
    //   "Engaged in rigorous curriculum to develop the necessary skills and knowledge for a successful career in the tech industry.",
    image: tamu,
    date: "AUG 2019 –– MAY 2023",
  },
];

export const resume = pdf;
