import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";

import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Capabilities from "./sections/Capabilities";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const GlobalVisual = lazy(() =>
    import("./components/GlobalVisual")
);

function App() {
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

export default App;