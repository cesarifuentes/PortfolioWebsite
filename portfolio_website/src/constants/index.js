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
    text: "This website is a showcase of my achievements throughout my career as a software developer. Each element represents a meaningful milestone in my professional journey. These endeavors are meticulously created, resembling finely crafted pieces of art in their attention to detail and aesthetic quality.",
  },
  {
    id: "paragraph-2",
    text: "My foray into the realm of art commenced during my high school years, during which I pursued courses in art and graphic design, providing me with a strong foundation in artistic expression. Subsequently, I pursued a Bachelor's degree in Computer Science at Texas A&M University, where I had the opportunity to delve into the worlds of software development and 3D graphics.",
  },
  {
    id: "paragraph-3",
    text: "Whether I'm coding, creating a new graphic, or thinking of my next big venture, I infuse each undertaking with a discernible artistic sensibility. When I’m not furiously typing at my computer, you’ll find me playing Dead by Daylight, dedicating time to volunteer for the youth in my community, or going for a run.",
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
