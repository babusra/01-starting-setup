import Card from "./Card";

function About() {
  return (
    <div className="about">
      <div>
        <h2 className="workExperience-h2">About</h2>
        <Card
          subtitle={""}
          date={""}
          description={
            "Self-motivated, hard-working Computer Engineering Student with broad foundation in engineering principles. Provides engineering support to projects. Successful completion of advanced academic projects demonstrating engineering support capability."
          }
        />
      </div>
    </div>
  );
}

export default About;
