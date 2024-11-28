import videoBg from "/fond_Solo.mp4";
import projects from "./data/projects.json";
import ProjectCards from "./ProjectCards";
import Skills from "./Skills";
import skills from "./data/skills.json";

function App() {
  return (
    <div className="fond">
      <video src={videoBg} autoPlay loop muted />
      <main className="header">
        <section className="title">
          <h1>Bienvenue</h1>
          <p>sur mon Portfolio</p>
        </section>
        <section className="skill">
          {skills.map((skill) => (
            <Skills
              key={skill.id}
              skillname={skill.skillname}
              skillimg={skill.skillimg}
            />
          ))}
        </section>
        <p className="presentation">
          Ancien directeur d'accueil de loisirs, j'ai choisi
          <br /> de me reconvertir dans le développement web
          <br /> car j'aime bien créer, je ne suis pas forcément
          <br /> doué pour des activités manuelles, mais je me
          <br />
          débrouille avec un clavier et une souris donc je
          <br />
          le met à profit !
        </p>
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
        <section className="footer">
          <p>&copy; Joey Martin 2024</p>
        </section>
      </main>
    </div>
  );
}

export default App;
