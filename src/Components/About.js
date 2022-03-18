import Card from "./Card";

function About(props) {
  return (
    <div className="about">
      <div>
        <h2 className="workExperience-h2">About</h2>
        <Card
          subtitle={props.data[0].subtitle}
          date={props.data[0].date}
          description={props.data[0].description}
        />
      </div>
    </div>
  );
}

export default About;
