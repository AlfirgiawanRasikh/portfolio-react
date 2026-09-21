import Reveal from "../components/Reveal";

function Experience() {
    return (
        <section
            id="experience"
            className="section standard-section"
        >
            <span className="section-number">
                03
            </span>

            <div className="section-content">
                <Reveal>
                    <h2>
                        Experience
                    </h2>
                </Reveal>

                <Reveal delay={180}>
                    <div className="experience-list">
                        <article className="experience-item">
                            <span className="experience-year">
                                Oct - Dec 2025
                            </span>

                            <div className="experience-info">
                                <h3>
                                    UI Full Stack Developer Intern
                                </h3>

                                <p className="experience-company">
                                    PT Atrindo Asia Global
                                </p>

                                <p className="experience-description">
                                    Contributed to web application
                                    development across interface
                                    implementation, PHP-based backend
                                    functionality, and database
                                    management using MariaDB and
                                    phpMyAdmin.
                                </p>

                                <div className="experience-tech">
                                    <span>PHP</span>
                                    <span>MariaDB</span>
                                    <span>phpMyAdmin</span>
                                    <span>Web Development</span>
                                </div>
                            </div>

                            <span className="experience-type">
                                Internship
                            </span>
                        </article>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default Experience;
