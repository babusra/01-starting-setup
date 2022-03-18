import Card from "./Card";

function Tools(props) {
  return (
    <div className="tools">
      <div>
        <h2 className="workExperience-h2">Tools and Technology</h2>
        <Card
          subtitle={props.data[0].subtitle}
          date={props.data[0].date}
          description={props.data[0].description}
        />
      </div>
    </div>
  );
}

export default Tools;
