// TODO: why can't this simple import work
// import {
//   linkedin,
//   github,
//   gmail,
//   space_sim,
//   tamu,
//   publicis,
// } from "../src/assets";

import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import gmail from "../assets/gmail.png";
import space_sim from "../assets/space_sim.png";
import tamu from "../assets/tamu.png";
import publicis from "../assets/publicis.png";

export const socialMedias = [
  {
    id: "social-media-1",
    name: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
  {
    id: "social-media-2",
    name: "github",
    icon: github,
    link: "https://www.github.com/",
  },
  {
    id: "social-media-3",
    name: "gmail",
    icon: gmail,
    link: "fuentesivancesar@gmail.com",
  },
];

export const paragraphs = [
  {
    id: "paragraph-1",
    text: "Hey there, I'm Cesar! I'm passionate about crafting interactive and polished websites that leave a lasting impression. With a specialization in React and Node.js, I thrive on bringing dynamic user experiences to life. I'm currently working on elevating my skills in full-stack web development. As I continue to grow in this industry, I'm excited to create solutions that empower users across the world.",
  },
  {
    id: "paragraph-2",
    text: "My creative journey began in high school, where I took art and graphic design courses. Following that, I completed my B.S. in Computer Science at Texas A&M University, which is where I was exposed to web development and 3D graphics. Whether it's coding, designing, or conceptualizing, every venture I undertake is infused with an unmistakable artistic flair.",
  },
  {
    id: "paragraph-3",
    text: "When I’m not furiously typing at my computer, you’ll find me playing Dead by Daylight, dedicating time to volunteer for the youth in my community, and creating art.",
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

// export const text = [
//   {
//     id: "text-1",
//     title:
//       "I build websites to deliver engaging, user-friendly online experiences.",
//     name: "Cesar Fuentes",
//     job: "Software Developer",
//   },
// ];
