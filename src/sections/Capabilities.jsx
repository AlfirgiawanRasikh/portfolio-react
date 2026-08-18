import Reveal from "../components/Reveal";

const capabilities = [
    {
        number: "01",
        title: "Frontend Development & Tooling",
        skills: [
            "React",
            "JavaScript",
            "HTML / CSS",
            "Vite",
            "Three.js",
        ],
    },

    {
        number: "02",
        title: "Backend & API Development",
        skills: [
            "Node.js",
            "Express.js",
            "Python",
            "FastAPI",
            "PHP",
            "REST API",
            "API Integration",
        ],
    },

    {
        number: "03",
        title: "Database & Data Management",
        skills: [
            "PostgreSQL",
            "MySQL",
            "SQL",
            "PostgreSQL JSONB",
            "Schema Migrations",
        ],
    },

    {
        number: "04",
        title: "Authentication & API Logic",
        skills: [
            "JWT Authentication",
            "bcrypt",
            "CORS",
            "Validation",
            "Filtering & Pagination",
            "Data Normalization",
        ],
    },

    {
        number: "05",
        title: "Testing & Development Workflow",
        skills: [
            "pytest",
            "HTTPX",
            "Git",
            "GitHub",
            "Branching & Pull Requests",
            "Debugging",
        ],
    },

    {
        number: "06",
        title: "Systems & IT Support",
        skills: [
            "Windows",
            "Linux",
            "PC Building",
            "Hardware Troubleshooting",
            "Computer Maintenance",
            "Basic Networking",
        ],
    },
];

function Capabilities() {
    return (
        <section
            id="capabilities"
            className="section standard-section capabilities-section"
        >
            <span className="section-number">
                04
            </span>

            <div className="section-content">
                <Reveal>
                    <h2>Capabilities</h2>
                </Reveal>

                <Reveal delay={120}>
                    <p className="capabilities-intro">
                        Technologies and technical areas I have worked
                        with through projects, coursework, internships,
                        and hands-on development.
                    </p>
                </Reveal>

                <div className="capabilities-grid">
                    {capabilities.map((capability, index) => (
                        <Reveal
                            key={capability.number}
                            delay={80 + index * 60}
                        >
                            <article className="capability-item">
                                <span className="capability-number">
                                    {capability.number}
                                </span>

                                <h3>
                                    {capability.title}
                                </h3>

                                <div className="capability-skills">
                                    {capability.skills.map((skill) => (
                                        <span key={skill}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={150}>
                    <div className="additional-tools">
                        <span>
                            Additional
                        </span>

                        <p>
                            Java · OOP · OpenCV · BeautifulSoup4 · Psycopg ·
                            PhpSpreadsheet · Apache · MariaDB · phpMyAdmin
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default Capabilities;