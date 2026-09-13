import {
    lazy,
    Suspense,
    useEffect,
} from "react";

import {
    Navigate,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Capabilities from "./sections/Capabilities";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import HomeServerCaseStudy from "./pages/HomeServerCaseStudy";

const GlobalVisual = lazy(() =>
    import("./components/GlobalVisual")
);

function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) {
            window.scrollTo({
                top: 0,
                left: 0,
            });

            return;
        }

        const id = location.hash.replace("#", "");

        const scrollToSection = () => {
            const element = document.getElementById(id);

            if (!element) {
                return;
            }

            element.scrollIntoView({
                behavior: "auto",
                block: "start",
            });
        };

        const frame = requestAnimationFrame(
            scrollToSection
        );

        return () => {
            cancelAnimationFrame(frame);
        };
    }, [
        location.pathname,
        location.hash,
    ]);

    return null;
}

function PortfolioHome() {
    return (
        <div className="site">
            <Suspense fallback={null}>
                <GlobalVisual />
            </Suspense>

            <Navbar />

            <main className="content">
                <Home />
                <About />
                <Experience />
                <Capabilities />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

function App() {
    return (
        <>
            <ScrollToHash />

            <Routes>
                <Route
                    path="/"
                    element={<PortfolioHome />}
                />

                <Route
                    path="/projects/home-server"
                    element={<HomeServerCaseStudy />}
                />

                <Route
                    path="*"
                    element={
                        <Navigate
                            to="/"
                            replace
                        />
                    }
                />
            </Routes>
        </>
    );
}

export default App;
