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
                    <h2>Experience</h2>
                </Reveal>

                <Reveal delay={180}>
                    <div className="experience-list">
                        <article className="experience-item">
                            <span className="experience-year">
                                2025
                            </span>

                            <div className="experience-info">
                                <h3>
                                    UI Full Stack Developer Intern
                                </h3>

                                <p>
                                    PT Atrindo Asia Global
                                </p>
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
