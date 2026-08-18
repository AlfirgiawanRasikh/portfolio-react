import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const navItems = [
    { id: "about", label: "About", number: "01" },
    { id: "experience", label: "Experience", number: "02" },
    { id: "capabilities", label: "Capabilities", number: "03" },
    { id: "projects", label: "Projects", number: "04" },
    { id: "contact", label: "Contact", number: "05" },
];

function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const sectionIds = [
            "home",
            ...navItems.map((item) => item.id),
        ];

        const handleScroll = () => {
            const position =
                window.scrollY + window.innerHeight * 0.35;

            let current = "home";

            sectionIds.forEach((id) => {
                const section = document.getElementById(id);

                if (section && position >= section.offsetTop) {
                    current = id;
                }
            });

            setActiveSection(current);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header className="navbar">
                <a
                    href="#home"
                    className="navbar-logo"
                    aria-label="Home"
                    onClick={closeMenu}
                >
                    <img src={logo} alt="Alfirgiawan Rasikh" />
                </a>

                <nav className="navbar-links" aria-label="Main navigation">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={
                                activeSection === item.id
                                    ? "active"
                                    : ""
                            }
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <button
                    type="button"
                    className={`menu-toggle ${
                        menuOpen ? "menu-open" : ""
                    }`}
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    <span />
                    <span />
                </button>
            </header>

            <div
                id="mobile-navigation"
                className={`mobile-menu ${
                    menuOpen ? "mobile-menu-open" : ""
                }`}
                aria-hidden={!menuOpen}
            >
                <nav
                    className="mobile-menu-links"
                    aria-label="Mobile navigation"
                >
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={closeMenu}
                            className={
                                activeSection === item.id
                                    ? "active"
                                    : ""
                            }
                        >
                            <span>{item.number}</span>
                            <strong>{item.label}</strong>
                            <span>↘</span>
                        </a>
                    ))}
                </nav>

                <div className="mobile-menu-bottom">
                    <span>Portfolio · 2026</span>
                    <span>Jakarta, Indonesia</span>
                </div>
            </div>
        </>
    );
}

export default Navbar;