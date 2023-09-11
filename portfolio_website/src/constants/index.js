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

export const paragraphs = [
  {
    id: "paragraph-1",
    text: "As someone deeply engaged in various interests, I've always dabbled in a wide array of fields, including volunteering, graphic design, mathematics, and science. I didn't have a clear direction in life until I enrolled in my high school's AP Computer Science course. It was during this course that I discovered my true passion. My very first coding project was a pomodoro timer app designed to aid students in managing their study time. Through this experience, I found a fulfilling path where I could assist others while enhancing my problem-solving abilities and creating solutions that are both functional and visually appealing. To this day, I continue to embrace that sentiment, building things that are practical, of top-notch quality, and aesthetically pleasing.",
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
    alt: "iPhone showing replace me app",
  },
  {
    id: "project-2",
    title: "Las Huastecas",
    description:
      "A full stack e-commerce website for a local Mexican restaurant. In production.",
    link: "",
    image: huastecas,
    isNew: true,
    alt: "Laptop showing my e-commerce website",
  },
  {
    id: "project-3",
    title: "Spotify Arcade",
    description:
      "A full stack web app using the Spotify API that lets friends compete to see who knows each others music taste the best. In production.",
    link: "",
    image: spotify_arcade,
    isNew: false,
    alt: "Laptop showing my spotify arcade website",
  },
  {
    id: "project-4",
    title: "Space Simulation",
    description:
      "A 3D OpenGL video game engine in C++ that simulates the physical movement of particles in space.",
    link: "https://people.engr.tamu.edu/sueda/courses/CSCE450/2022F/projects/Cesar_Fuentes/index.html",
    image: space_sim,
    isNew: false,
    alt: "Laptop showing a screenshot of my space simulation video game",
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
