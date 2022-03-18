import Card from "./Card";

function Projects(props) {
  return (
    <div className="projects">
      <div>
        <h2 className="workExperience-h2">Projects</h2>
        <Card
          subtitle={props.data[0].subtitle}
          date={props.data[0].date}
          description={props.data[0].description}
        />
      </div>
    </div>
  );
}

export default Projects;
