import { useState } from "react";
import Reveal from "../components/Reveal";

const PROJECTS_PER_PAGE = 5;

const projects = [
    {
        number: "01",
        title: "Media Monitoring Backend API",

        description:
            "Backend service for ingesting, searching, and analyzing media mentions with duplicate detection, data normalization, filtering, pagination, and aggregated statistics.",

        technologies: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "pytest",
        ],

        year: "2026",
        type: "Backend API",

        repository:
            "https://github.com/AlfirgiawanRasikh/media-monitoring-assessment",
    },
    {
        number: "02",
        title: "FORME",

        description:
            "Creative studio portfolio focused on editorial layouts, refined motion, responsive design, and interactive brand case studies across fashion, music, hospitality, and furniture.",

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
        ],

        year: "2026",
        type: "Creative Frontend",

        live: "https://forme-drab.vercel.app/",
        repository:
            "https://github.com/AlfirgiawanRasikh/forme",
    },
    {
        number: "03",
        title: "MORI",

        description:
            "Mental wellness product concept designed to reduce decision fatigue through guided emotional check-ins, contextual recommendations, grounding exercises, and reflective patterns.",

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "GSAP",
        ],

        year: "2026",
        type: "Product Frontend",

        live: "https://mori-alpha.vercel.app/",
        repository:
            "https://github.com/AlfirgiawanRasikh/MORI",
    },
    {
        number: "04",
        title: "Hardware Diagnosis Expert System",

        description:
            "Web-based expert system for diagnosing computer hardware problems from selected symptoms using rule-based diagnosis, with authentication, diagnosis history, administrative management, and PDF reporting.",

        technologies: [
            "PHP",
            "MySQL",
            "JavaScript",
            "Dompdf",
        ],

        year: "2026",
        type: "Expert System",

        repository:
            "https://github.com/AlfirgiawanRasikh/sistem-pakar-hardware",
    },
    {
        number: "05",
        title: "Self-Hosted Home Server Infrastructure",

        description:
            "Production-oriented bare-metal Linux infrastructure built from repurposed hardware for hosting applications, APIs, databases, private storage, automated deployments, encrypted off-site backups, monitoring, and AI-assisted server operations.",

        technologies: [
            "Linux",
            "Nginx",
            "PostgreSQL",
            "Cloudflare",
            "Tailscale",
            "systemd",
            "Hermes Agent",
        ],

        year: "2026",
        type: "Infrastructure / DevOps",

        caseStudy: "/projects/home-server",
    },
];

function Projects() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.max(
        1,
        Math.ceil(projects.length / PROJECTS_PER_PAGE)
    );

    const startIndex =
        (currentPage - 1) * PROJECTS_PER_PAGE;

    const visibleProjects = projects.slice(
        startIndex,
        startIndex + PROJECTS_PER_PAGE
    );

    const goToPage = (nextPage) => {
        if (
            nextPage < 1 ||
            nextPage > totalPages ||
            nextPage === currentPage
        ) {
            return;
        }

        setCurrentPage(nextPage);

        requestAnimationFrame(() => {
            document
                .getElementById("projects")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
        });
    };

    const formatPage = (page) =>
        String(page).padStart(2, "0");

    return (
        <section
            id="projects"
            className="section standard-section projects-section"
        >
            <span className="section-number">
                05
            </span>

            <div className="projects-wrapper">
                <div className="projects-header">
                    <Reveal>
                        <h2>
                            Projects
                        </h2>
                    </Reveal>

                    <Reveal delay={120}>
                        <p>
                            A selection of projects built through
                            practical development, technical exploration,
                            and problem solving.
                        </p>
                    </Reveal>
                </div>

                <div className="projects-list">
                    {visibleProjects.map((project) => (
                        <Reveal key={project.number}>
                            <article className="project-item">
                                <div className="project-top">
                                    <span className="project-number">
                                        {project.number}
                                    </span>

                                    <span className="project-type">
                                        {project.type}
                                    </span>

                                    <span className="project-year">
                                        {project.year}
                                    </span>
                                </div>

                                <div className="project-main">
                                    <h3>
                                        {project.title}
                                    </h3>

                                    <div className="project-info">
                                        <p>
                                            {project.description}
                                        </p>

                                        <div className="project-tech">
                                            {project.technologies.map(
                                                (technology) => (
                                                    <span key={technology}>
                                                        {technology}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div className="project-actions">
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="project-link"
                                                aria-label={`View ${project.title} live site`}
                                            >
                                                <span>
                                                    Live site
                                                </span>

                                                <span
                                                    aria-hidden="true"
                                                    className="project-arrow"
                                                >
                                                    ↗
                                                </span>
                                            </a>
                                        )}

                                        {project.repository && (
                                            <a
                                                href={project.repository}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="project-link"
                                                aria-label={`View ${project.title} repository on GitHub`}
                                            >
                                                <span>
                                                    Repository
                                                </span>

                                                <span
                                                    aria-hidden="true"
                                                    className="project-arrow"
                                                >
                                                    ↗
                                                </span>
                                            </a>
                                        )}

                                        {project.caseStudy && (
                                            <a
                                                href={project.caseStudy}
                                                className="project-link"
                                                aria-label={`View ${project.title} case study`}
                                            >
                                                <span>
                                                    Case study
                                                </span>

                                                <span
                                                    aria-hidden="true"
                                                    className="project-arrow"
                                                >
                                                    ↗
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>

                <div
                    className="projects-pagination"
                    aria-label="Project pages"
                >
                    <button
                        type="button"
                        className="projects-pagination-button projects-pagination-previous"
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <span
                            aria-hidden="true"
                            className="projects-pagination-arrow"
                        >
                            ←
                        </span>

                        <span>
                            Previous
                        </span>
                    </button>

                    <span
                        className="projects-pagination-status"
                        aria-live="polite"
                    >
                        {formatPage(currentPage)}
                        <span>/</span>
                        {formatPage(totalPages)}
                    </span>

                    <button
                        type="button"
                        className="projects-pagination-button projects-pagination-next"
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <span>
                            Next
                        </span>

                        <span
                            aria-hidden="true"
                            className="projects-pagination-arrow"
                        >
                            →
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Projects;
