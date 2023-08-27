// TODO: why can't this simple import work
// import {
//   linkedin,
//   github,
//   gmail,
//   space_sim,
//   tamu,
//   publicis,
// } from "../src/assets";

import space_sim from "../assets/space_sim.png";
import tamu from "../assets/tamu.png";
import publicis from "../assets/publicis.png";

export const socialMedias = [
  {
    id: "social-media-1",
    name: "linkedin",
    link: "https://www.linkedin.com/",
  },
  {
    id: "social-media-2",
    name: "github",
    link: "https://www.github.com/",
  },
  {
    id: "social-media-3",
    name: "gmail",
    link: "fuentesivancesar@gmail.com",
  },
  {
    id: "social-media-4",
    name: "dribble",
    link: "https://www.dribbble.com/",
  },
];

export const paragraphs = [
  {
    id: "paragraph-1",
    text: "This website serves as a curated showcase of my achievements throughout my tenure as a software developer. Within its digital confines, each project represents a profoundly meaningful milestone in my professional journey. These endeavors are meticulously crafted, resembling finely crafted pieces of art in their attention to detail and aesthetic quality.",
  },
  {
    id: "paragraph-2",
    text: "My foray into the realm of art commenced during my high school years, during which I pursued courses in art and graphic design, providing me with a strong foundation in artistic expression. Subsequently, I pursued a Bachelor of Science degree in Computer Science at Texas A&M University, where I had the opportunity to delve into the worlds of software development and 3D graphics.",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Space Simulation",
    description:
      "A 3D OpenGL video game engine in C++ that simulates the physical movement of particles in space.",
    link: "https://www.google.com/",
    image: space_sim,
  },
  {
    id: "project-2",
    title: "Spotify Arcade",
    description:
      "A full stack web app using the Spotify API that lets friends compete to see who knows each others music taste the best.",
    link: "https://www.google.com/",
    image: space_sim,
  },

  {
    id: "project-3",
    title: "Las Huastecas",
    description: "A frontend website for a local Mexican restaurant.",
    link: "https://www.google.com/",
    image: space_sim,
  },
];

export const experiences = [
  {
    id: "experience-1",
    title: "Software Engineer Intern",
    company: "Publicis Sapient",
    description:
      "Collaborated with engineering and product management interns to develop a digital, full-stack solution for a client.",
    link: "https://www.google.com/",
    image: publicis,
    date: "JUNE –– AUG 2022",
  },
  {
    id: "experience-2",
    title: "B.S. in Computer Science",
    company: "Texas A&M University",
    description:
      "Engaged in rigorous curriculum to develop the necessary skills and knowledge for a successful career in the tech industry.",
    link: "https://www.google.com/",
    image: tamu,
    date: "AUG 2019 –– MAY 2023",
  },
];

export const resume = [
  {
    id: "resume-1",
    file: space_sim,
  },
];
