import logo from "../assets/logo.png";

function Navbar() {
    return (
        <header className="navbar">
            <a
                href="#home"
                className="navbar-logo"
                aria-label="Alfirgiawan Rasikh - Home"
            >
                <img
                    src={logo}
                    alt="Alfirgiawan Rasikh"
                />
            </a>

            <nav className="navbar-links">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>

        </header>
    );
}

export default Navbar;