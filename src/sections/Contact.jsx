function Contact() {
    return (
        <section
            id="contact"
            className="section contact-section"
        >
            <div className="section-number">
                05
            </div>

            <div className="contact-content">
                <h2>
                    Let's talk.
                </h2>

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
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub ↗
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;