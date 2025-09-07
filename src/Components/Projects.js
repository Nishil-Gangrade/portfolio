// show user: 22bce0119
import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Veero Ki Seva",
    subtitle: "MERN | Razorpay | JWT | Cloudinary",
    description:
      "Role-based donation platform connecting donors with martyrs’ families. Features authentication, dashboards, and Razorpay integration.",
    image: "/projects/veero.png", 
    github: "https://github.com/Nishil-Gangrade/Veero-Ki-Seva",
    website: "https://veero-ki-seva.vercel.app/", 
  },
  {
    title: "Buzzin",
    subtitle: "MERN | Socket.IO | Gemini API",
    description:
      "Full-stack chat app with real-time messaging, typing indicators, AI-powered replies, and secure authentication.",
    image: "/projects/buzzin.png", 
    github: "https://github.com/Nishil-Gangrade/Buzzin",
    website: "https://buzzin-4hx4.onrender.com/", 
  },
  {
    title: "Tomato",
    subtitle: "MERN | Stripe | JWT | Role-based",
    description:
      "Food-ordering platform built with the MERN stack. Provides user and admin panels for ordering, product management, and order tracking.",
    image: "/projects/tomato.png", 
    github: "https://github.com/Nishil-Gangrade/Tomato-Food-Deliver-App.git",
    website: "https://food-delivery-frontend-s2l9.onrender.com", 
  },
];

function Projects() {
  return (
    <div className="mt-10">
      <h1 className="font-semibold text-3xl mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-4 transition-transform duration-300 hover:scale-95 hover:shadow-xl"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />

            {/* Title + Subtitle */}
            <h2 className="font-semibold text-xl">{project.title}</h2>
            <h3 className="text-gray-600 text-sm mb-2">{project.subtitle}</h3>

            {/* Short description */}
            <p className="text-gray-700 text-sm mb-4">{project.description}</p>

            {/* Links */}
            <div className="flex gap-4">
              {/* GitHub link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-800 hover:text-black"
              >
                <DiGithubBadge className="text-2xl" /> GitHub
              </a>

              {/* Website link */}
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
