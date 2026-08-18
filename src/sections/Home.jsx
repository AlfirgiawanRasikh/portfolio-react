import Reveal from "../components/Reveal";

function Home() {
    return (
        <section
            id="home"
            className="section home-section"
        >
            <span className="section-number">
                01
            </span>

            <div className="home-content">

                <div className="home-heading">

                    <Reveal>
                        <p className="eyebrow">
                            INFORMATICS ENGINEERING GRADUATE
                        </p>
                    </Reveal>

                    <Reveal delay={90}>
                        <h1>
                            <span>Alfirgiawan</span>
                            <span>Rasikh</span>
                        </h1>
                    </Reveal>

                </div>


                <div className="home-bottom">

                    <Reveal delay={170}>
                        <p className="home-description">
                            Developer interested in building practical
                            web applications, backend systems, and
                            solving technical problems through
                            hands-on development.
                        </p>
                    </Reveal>


                    <Reveal delay={230}>
                        <div className="home-focus">
                            <span className="home-meta-label">
                                Focus
                            </span>

                            <p>
                                Web Development
                                <br />
                                Backend Systems
                                <br />
                                IT Support
                            </p>
                        </div>
                    </Reveal>


                    <Reveal delay={290}>
                        <div className="home-location">
                            <span className="home-meta-label">
                                Based in
                            </span>

                            <p>
                                Jakarta
                                <br />
                                Indonesia
                            </p>
                        </div>
                    </Reveal>


                    <a
                        href="#about"
                        className="home-scroll"
                        aria-label="Scroll to About section"
                    >
                        <span>Scroll</span>
                        <span className="home-scroll-arrow">
                            ↓
                        </span>
                    </a>

                </div>

            </div>
        </section>
    );
}

export default Home;