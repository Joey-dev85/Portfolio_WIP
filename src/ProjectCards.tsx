interface CardInterface {
  projectname: string;
  projectimg: string;
  projectlink: string;
}

function ProjectCards({ projectname, projectimg, projectlink }: CardInterface) {
  return (
    <section className="Card">
      <h1>{projectname}</h1>
      <img src={projectimg} alt={"Image de" + projectname} />
      <div className="links">
        <a href={projectlink}>{projectname}</a>
      </div>
    </section>
  );
}

export default ProjectCards;
