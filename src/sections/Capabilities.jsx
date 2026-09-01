import Reveal from "../components/Reveal";

const capabilities = [
    {
        number: "01",
        title: "Frontend Development",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "HTML / CSS",
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
            "Swagger / OpenAPI",
            "Postman",
        ],
    },

    {
        number: "03",
        title: "Database & Data Management",
        skills: [
            "PostgreSQL",
            "MySQL",
            "SQL",
            "Prisma ORM",
            "PostgreSQL JSONB",
            "Schema Migrations",
        ],
    },

    {
        number: "04",
        title: "Authentication & Application Logic",
        skills: [
            "Better Auth",
            "JWT Authentication",
            "bcrypt",
            "Authorization",
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
            "Automated Testing",
            "Git",
            "GitHub",
            "Branching & Pull Requests",
            "Debugging",
        ],
    },

    {
        number: "06",
        title: "Systems, Linux & IT Support",
        skills: [
            "Windows",
            "Linux",
            "Home Server",
            "System Monitoring",
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
                    <h2>
                        Capabilities
                    </h2>
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
                            Java · OOP · Vite · React Router · HTTPX ·
                            OpenCV · BeautifulSoup4 · Psycopg · Apache ·
                            MariaDB · phpMyAdmin
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default Capabilities;