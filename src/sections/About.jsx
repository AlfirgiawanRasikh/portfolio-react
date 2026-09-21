import Reveal from "../components/Reveal";

function About() {
    return (
        <section
            id="about"
            className="section standard-section"
        >
            <span className="section-number">
                02
            </span>

            <div className="section-content">
                <Reveal>
                    <h2>
                        About
                    </h2>
                </Reveal>

                <Reveal delay={180}>
                    <div className="section-text">
                        <p>
                            I am an Informatics Engineering graduate
                            building practical web applications and
                            exploring the systems that support them.
                        </p>

                        <p>
                            My work spans frontend development, backend
                            systems, databases, Linux infrastructure,
                            and technical troubleshooting.
                        </p>

                        <p>
                            I learn primarily through real projects,
                            combining software development with hands-on
                            experimentation and problem solving.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default About;
