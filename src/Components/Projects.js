import Card from "./Card";

function Projects() {
  return (
    <div className="projects">
      <div>
        <h2 className="workExperience-h2">Projects</h2>
        <Card
          subtitle={
            "Turkcell Geleceği Yazan Kadınlar İklim Fikir Maratonu | PONF(Protect Our Nature and Future) "
          }
          date={""}
          description={
            "-It contributes to sustainable agriculture by following the use of agricultural pesticide used by agricultural producers, which are not followed in the plant protection products tracking system followed by the ministry, in the right weather conditions, on the right use dates and in the right amount."
          }
        />
      </div>
    </div>
  );
}

export default Projects;
