interface SkillInterface {
    skillname: string;
    skillimg: string;
  }

function Skills({ skillname, skillimg }: SkillInterface) {

    return (
      <section className="skillcard">
        <h1>{skillname}</h1>
        <img src={skillimg} alt={"Image de" + skillname} />
      </section>
    );
  }

  export default Skills;