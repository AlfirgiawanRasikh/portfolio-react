import GlobalVisual from "./components/GlobalVisual";
import Navbar from "./components/Navbar";

import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
    return (
        <div className="site">
            <GlobalVisual />

            <Navbar />

            <main className="content">
                <Home />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default App;