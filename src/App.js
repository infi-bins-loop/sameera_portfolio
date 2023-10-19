import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Education from "./components/Education/education";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Education />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
