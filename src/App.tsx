import NavBar from "./Navbar";
import videoBg from "../public/fond_Solo.mp4";
import projects from "./data/projects.json";
import ProjectCards from "./ProjectCards";

function App() {
  return (
    <div className="fond">
      <video src={videoBg} autoPlay loop muted />
      <main className="header">
        <section className="title">
          <h1>Bienvenue</h1>
          <p>sur mon Portfolio</p>
        </section>
        <NavBar />
        <section className="cards">
          {projects.map((project) => (
            <ProjectCards
              key={project.id}
              projectname={project.projectname}
              projectimg={project.projectimg}
              projectlink={project.projectlink}
            />
          ))}
        </section>
        <section className="Footer">
          <p>&copy; Joey Martin 2024</p>
        </section>
      </main>
    </div>
  );
}

export default App;
