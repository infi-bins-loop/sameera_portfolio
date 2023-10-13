import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Education from "./components/Education/education";
import Projects from "./components/Projects/projects";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Education />
        <Projects />
    </div>
  );
}

export default App;
