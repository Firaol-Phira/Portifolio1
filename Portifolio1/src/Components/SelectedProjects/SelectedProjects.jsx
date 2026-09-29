import React from "react";
import "./SelectedProjects.css";
import Geda from "../../assets/Geda.jpg";
import Netflix from "../../assets/NeTfliximg.PNG";
import Apple from "../../assets/Apple.jpg";

const projectsData = [
  {
    id: 1,
    title: "Netflix Clone",
    image: Netflix,
    tags: ["React", "Async JS", "Bootstrap 5"],
    description:
      "A frontend rebuild that captures the exact look and feel of the Netflix home interface. Uses asynchronous API calls to fetch and display trending showcase movies in real-time.",
    link: "#",
  },
  {
    id: 2,
    title: "GedaTech Platform",
    image: Geda,
    tags: ["React", "MySQL", "Node.js"],
    description:
      "A dynamic web platform for an educational technology company. Built with an administrative backend to manage course catalogs, track student registration records, and securely organize student data columns using a structured MySQL database layout.",
    link: "#",
  },
  {
    id: 3,
    title: "Apple Rebuild",
    image: Apple,
    tags: ["jQuery", "Bootstrap CSS", "Express"],
    description:
      "An interactive e-commerce showcase featuring immersive 3D product rendering, seamless scrolling animations, dynamic shopping cart states, and responsive dark mode themes.",
    link: "#",
  },
];

export default function SelectedProjects() {
  return (
    <section id="projects" className="container projects-section py-5">
      <div className="container project-max-width">
        <h2 className="projects-heading mb-5">
          Selected <span className="highlight-text">Projects</span>
        </h2>

        {/* Bootstrap Row handling layout shifts natively */}
        <div className="row g-4">
          {projectsData.map((project) => (
            /* 
              col-12: Full width stack on mobile screens
              col-md-6: Two columns on medium tablets
              col-lg-4: Three columns on desktop laptops
            */
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <div className="project-card h-100">
                {/* Mockup Browser Window Frame */}
                <div className="browser-frame">
                  <div className="browser-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="project-info d-flex flex-column flex-grow-1">
                  <h3 className="project-title">{project.title}</h3>

                  <div className="project-tags mb-3">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="project-description mb-4">
                    {project.description}
                  </p>

           <a
  href={project.link}
  className="project-link mt-auto"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg
    className="link-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H18m0 0v4.5M18 6l-7.5 7.5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 13.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4.5"
    />
  </svg>
  View Live Site
</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
