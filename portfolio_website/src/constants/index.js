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
//
import raytracer from "../assets/projects/raytracer.png";
import teaparty from "../assets/projects/a6.mp4";
import genreate from "../assets/projects/genreate.png";
import trip2gether from "../assets/projects/trip2gether.png";
import website from "../assets/projects/website.png";
import ros from "../assets/projects/ros.gif";

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

import rain from "../assets/packagingIcons/rain.svg";
import recycle from "../assets/packagingIcons/recycle.svg";
import trash from "../assets/packagingIcons/trash.svg";

export const packagingIcons = [
  {
    id: "icon-2",
    name: "recycle",
    icon: recycle,
  },
  {
    id: "icon-3",
    name: "trash",
    icon: trash,
  },
  {
    id: "icon-1",
    name: "rain",
    icon: rain,
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
    title: "Replace Me",
    year: "2023",
    description:
      "An iOS app that helps people remember to replace commonly forgotten household items.",
    link: "",
    link_title: "",
    image: replace_me,
    alt: "iphone showing an app with a fire extinguisher",
    isFeatured: true,
    tools: ["Swift", "Xcode"],
  },
  {
    title: "Las Huastecas",
    year: "2023",
    description:
      "A full stack e-commerce website for a local Mexican restaurant.",
    link: "",
    link_title: "",
    image: huastecas,
    alt: "laptop showing a mexican restaurant website",
    tools: ["MongoDB", "Express", "React", "NodeJS"],
    isFeatured: true,
  },
  {
    title: "Spotify Arcade",
    year: "2023",
    description:
      "A full stack web app that lets friends compete to see who knows each others music taste the best.",
    link: "",
    link_title: "",
    image: spotify_arcade,
    alt: "a laptop showing my a game with music and other people",
    tools: ["Express", "React", "NodeJS"],
    isFeatured: true,
  },
  {
    title: "Portfolio Website",
    year: "2023",
    description: "This is my personal website.",
    link: "https://www.cesarfuentes.com",
    link_title: "www.cesarfuentes.com",
    image: website,
    alt: "a laptop showing a screenshot of a spaceship",
    tools: ["React", "Tailwind", "Hostinger"],
    isFeatured: false,
  },
  {
    title: "Matlab Unreal Engine Simulation with ROS2 Interface",
    year: "2023",
    description:
      "A simulated driving scene that receives waypoints and outputs simulated sensor measurements.",
    image: ros,
    alt: "car simulation moving on the left with camera sensor and lidar sensor on the right",
    tools: ["MATLAB", "Simulink", "Unreal", "ROS2", "Docker"],
    isFeatured: false,
  },
  {
    title: "Space Simulation",
    year: "2022",
    description:
      "A 3D OpenGL video game engine in C++ that simulates the physical movement of particles in space.",
    link: "https://people.engr.tamu.edu/sueda/courses/CSCE450/2022F/projects/Cesar_Fuentes/index.html",
    link_title: "people.engr.tamu.edu",
    image: space_sim,
    tools: ["C++", "OpenGL", "Xcode"],
    isFeatured: true,
    alt: "Laptop showing a screenshot of my space simulation video game",
  },
  {
    title: "Trips2Gether",
    year: "2022",
    description: "A web app that allows users to plan trips togethers.",
    image: trip2gether,
    alt: "comments that a user made about several vacation destinations",
    tools: ["XAMPP", "PHP", "MySQL", "Bootstrap"],
    isFeatured: false,
  },
  {
    title: "Optimization Engine Interface",
    year: "2022",
    description:
      "A web app that allows users to select an optimization LP model, perform what-if analysis, and visualize the results.",
    link_title: "(private)",
    tools: ["MySQL", "Express", "Angular", "NodeJS"],
    isFeatured: false,
  },
  {
    title: "MANRRS Outreach",
    year: "2022",
    description:
      "A website that sends bulk text messages to a student organization's members.",
    link_title: "(private)",
    tools: ["Ruby on Rails", "Heroku", "Docker", "PostgreSQL", "Python"],
    isFeatured: false,
  },
  {
    title: "Ray Tracer",
    year: "2022",
    description: "A ray tracer with reflective spheres.",
    image: raytracer,
    alt: "2 blue and red spheres next to 2 reflective spheres",
    tools: ["C++", "GLM", "Xcode"],
    isFeatured: false,
  },
  {
    title: "Tea Party",
    year: "2022",
    description:
      "An opengl project involving dynamic geometry, deferred rendering, and attenuated lights.",
    image: teaparty,
    alt: "rotating bunnies sheering teapots and bouncing spheres with lights spinning around the room",
    tools: ["C++", "OpenGL", "Xcode"],
    isFeatured: false,
  },
  {
    title: "GENREate",
    year: "2021",
    description:
      "A web app that uses the Spotify API to create custom playlists based on the genres in your library.",
    image: genreate,
    alt: "screenshot of spotify playlist with 4 songs",
    tools: ["HTML", "CSS", "Javascript", "NodeJS", "SpotifyAPI"],
    isFeatured: false,
  },
  {
    title: "Movie Sorter GUI",
    year: "2021",
    description:
      "A GUI that displays a database of movies in abstracted forms (top ten media, best horror films...)",
    link_title: "(private)",
    tools: ["Java", "AWS", "PostgreSQL", "JavaFX", "Eclipse"],
    isFeatured: false,
  },
];

export const experiences = [
  {
    id: "experience-1",
    title: "Software Engineer Intern",
    company: "Publicis Sapient",
    description:
      "Collaborated with engineering and product management interns to develop a digital, full-stack solution for a client.",
    image: publicis,
    date: "JUNE - AUG 2022",
    isFeatured: true,
  },
  {
    id: "experience-2",
    title: "B.S. in Computer Science",
    company: "Texas A&M University",
    description:
      "Engaged in rigorous curriculum to develop the necessary skills and knowledge for a successful career in the tech industry.",
    image: tamu,
    date: "MAY 2023",
    isFeatured: true,
  },
  {
    id: "experience-3",
    title: "President",
    company: "TAMU UNICEF",
    description:
      "Planned and led club meetings and discussions on humanitarian issues.",
    // image: tamu,
    date: "2019-2023",
    isFeatured: false,
  },
  {
    id: "experience-4",
    title: "Sales Associate",
    company: "J. Crew Factory",
    description:
      "Collaborated with team members and managers to drive the business, jump in on tasks that help create a seamless customer experience, and bring a collaborative, kind, and inclusive energy to the sales floor.",
    // image: tamu,
    date: "2021",
    isFeatured: false,
  },
  {
    id: "experience-5",
    title: "Calculus Tutor",
    company: "Tutor.com",
    description:
      "Tutored high school and college students in Calculus I, II, and III.",
    // image: tamu,
    date: "2020",
    isFeatured: false,
  },
  {
    id: "experience-6",
    title: "Commercial Painter",
    company: "K. Hovnanian Homes",
    description: "",
    // image: tamu,
    date: "2019-2023",
    isFeatured: false,
  },
];

export const resume = pdf;
