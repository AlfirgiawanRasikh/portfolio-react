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
                    <h2>About</h2>
                </Reveal>

                <Reveal delay={180}>
                    <div className="section-text">
                        <p>
                            I am an Informatics Engineering graduate
                            interested in building practical web
                            applications and understanding the systems
                            behind them.
                        </p>

                        <p>
                            My interests span frontend development,
                            backend development, databases, operating
                            systems, and computer troubleshooting.
                        </p>

                        <p>
                            I enjoy learning through real projects,
                            experimenting with technology, and solving
                            technical problems directly.
                        </p>
                    </div>
                </Reveal>

            </div>
        </section>
    );
}

export default About;