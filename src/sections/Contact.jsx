import Reveal from "../components/Reveal";

function Contact() {
    return (
        <section
            id="contact"
            className="section contact-section"
        >
            <span className="section-number">
                06
            </span>

            <div className="contact-content">
                <Reveal>
                    <h2>
                        Let's talk.
                    </h2>
                </Reveal>

                <Reveal delay={180}>
                    <div className="contact-details">
                        <a
                            href="mailto:alfirgiawan234@gmail.com"
                            className="contact-email"
                        >
                            alfirgiawan234@gmail.com
                        </a>

                        <div className="contact-socials">
                            <a
                                href="https://linkedin.com/in/alfirgiawanrasikh/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn ↗
                            </a>

                            <a
                                href="https://github.com/AlfirgiawanRasikh"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub ↗
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default Contact;