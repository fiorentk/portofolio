import { useState } from "react";

// Import images
import homeImg from "../assets/elibrary-project/home.png";
import allBooksImg from "../assets/elibrary-project/all-books.png";
import borrowImg from "../assets/elibrary-project/borrow.png";
import loginImg from "../assets/elibrary-project/login.png";
import registerImg from "../assets/elibrary-project/register.png";
import adminRouteImg from "../assets/elibrary-project/admin-route.png";
import privateRouteImg from "../assets/elibrary-project/private-route.png";
import acceptRejectImg from "../assets/elibrary-project/accept-reject-request.png";
import confirmationImg from "../assets/elibrary-project/confirmation.png";
import sentimentAPIImg from "../assets/real-API/sentiment-analyze-api.png";
import predictrouteAPIImg from "../assets/real-API/predict-route-api.jpg";
import itms from "../assets/Bootcamp-Digital-Talent-II-PROJECT/itms.png";
import sipendi from "../assets/Bootcamp-Digital-Talent-II-PROJECT/sipendi.png";

interface Screenshot {
  title: string;
  img: string;
}

interface Project {
  id: number;
  title: string;
  homeImg: string;
  backendLink?: string;
  frontendLink?: string;
  shortDesc: string;
  longDesc?: string;
  backendDesc?: string;
  frontendDesc?: string;
  screenshots: Screenshot[];
  skills: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Library (Study Case)",
    homeImg: homeImg,
    backendLink: "https://github.com/fiorentk/elibrary-backend",
    frontendLink: "https://github.com/fiorentk/elibrary-frontend",
    shortDesc:
      "A full-stack E-Library project exploring backend and frontend development.",
    longDesc:
      "This project simulates an online library system where users can register, log in, view and filter book collections, borrow books, and return borrowed books. The app also implements route protection: private routes (only accessible if the user is logged in) and admin routes (only accessible if the logged-in user has admin role).",
    backendDesc:
      "Python, FastAPI, PostgreSQL, Docker, Pydantic models, ORM queries",
    frontendDesc: "React, Context API, React Router, API integration, Tailwind",
    screenshots: [
      { title: "Home", img: homeImg },
      { title: "All Books", img: allBooksImg },
      { title: "Borrow", img: borrowImg },
      { title: "Login", img: loginImg },
      { title: "Register", img: registerImg },
      { title: "Admin Route", img: adminRouteImg },
      { title: "Private Route", img: privateRouteImg },
      { title: "Accept/Reject Request", img: acceptRejectImg },
      { title: "Confirmation", img: confirmationImg },
    ],
    skills: [
      "FastAPI",
      "React",
      "PostgreSQL",
      "Docker",
      "Tailwind",
      "JavaScript",
    ],
  },
  {
    id: 2,
    title: "Bootcamp Digital Talent II Project",
    homeImg: itms,
    shortDesc:
      "I was involved in the development of two applications, ITMS NOVA and SiPenDi.",
    longDesc:
      "My role included preparing Business and System Requirement Specifications, designing business processes, creating app prototypes in Figma, and structuring MySQL databases.",
    backendDesc: "MySQL",
    frontendDesc: "Figma",
    screenshots: [
      { title: "ITMS NOVA", img: itms },
      { title: "SiPenDi", img: sipendi },
    ],
    skills: ["Figma", "MySQL"],
  },
  {
    id: 3,
    title: "Route Optimization API",
    homeImg: predictrouteAPIImg,
    backendLink: "https://github.com/fiorentk/Route-Optimization-Project",
    shortDesc: "API for route optimization and delivery planning.",
    longDesc:
      "Python FastAPI backend, Dockerized. Uses Google OR-Tools for TSP variants, OSRM & Geopy for distance matrices, pandas/requests for data processing. Outputs efficient routes, fuel & cost estimates.",
    backendDesc: "Python, FastAPI, Docker",
    screenshots: [
      { title: "Route Optimization API (Postman)", img: predictrouteAPIImg },
    ],
    skills: ["Python", "FastAPI", "Docker"],
  },
  {
    id: 4,
    title: "Sentiment Analysis API",
    homeImg: sentimentAPIImg,
    backendLink:
      "https://github.com/fiorentk/sentiment-analysis-google-maps-review",
    shortDesc: "Analyze Indonesian text reviews for sentiment automatically.",
    longDesc:
      "FastAPI + Docker backend using HuggingFace transformer models for accurate sentiment (positive, neutral, negative). Cleans/normalizes text, corrects typos, combines model outputs for confident result.",
    backendDesc: "Python, FastAPI, Docker",
    screenshots: [
      { title: "Sentiment Analysis API (Postman)", img: sentimentAPIImg },
    ],
    skills: ["Python", "FastAPI", "Docker"],
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (selectedProject) {
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <button
          className="mb-6 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 flex items-center transition"
          onClick={() => setSelectedProject(null)}
        >
          <span className="mr-2">&#8592;</span> Back
        </button>

        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          {selectedProject.title}
        </h1>

        <div className="mb-4 flex flex-wrap gap-2">
          {selectedProject.skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-100 px-3 py-1 rounded-lg text-sm shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="mb-4">
          {selectedProject.backendLink || selectedProject.frontendLink ? (
            <>
              {selectedProject.backendLink && (
                <a
                  href={selectedProject.backendLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 text-blue-600 underline hover:text-blue-800"
                >
                  Backend Repo
                </a>
              )}
              {selectedProject.frontendLink && (
                <a
                  href={selectedProject.frontendLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Frontend Repo
                </a>
              )}
            </>
          ) : (
            <p className="text-gray-500 italic">Private Repository</p>
          )}
        </div>

        <p className="mb-2">{selectedProject.shortDesc}</p>
        {selectedProject.longDesc && (
          <p className="mb-4 text-gray-700">{selectedProject.longDesc}</p>
        )}
        {selectedProject.backendDesc && (
          <p className="mb-2">
            <strong>Backend:</strong> {selectedProject.backendDesc}
          </p>
        )}
        {selectedProject.frontendDesc && (
          <p className="mb-4">
            <strong>Frontend:</strong> {selectedProject.frontendDesc}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedProject.screenshots.map((shot) => (
            <div
              key={shot.img}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-3 hover:shadow-lg transition"
            >
              <p className="font-semibold mb-2">{shot.title}</p>
              <img
                src={shot.img}
                alt={shot.title}
                className="rounded-lg shadow-sm w-full object-contain hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">My Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-5 cursor-pointer hover:shadow-lg hover:border-sky-500 hover:scale-105 transition-all duration-200"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.homeImg}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 text-sm mb-3">{project.shortDesc}</p>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-100 px-3 py-1 rounded-lg text-sm shadow-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
