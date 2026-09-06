import Reveal from "../components/Reveal";

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
];

function Projects() {
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
                            Selected Work
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

                    {projects.map((project) => (
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

                                    </div>

                                </div>

                            </article>

                        </Reveal>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;
