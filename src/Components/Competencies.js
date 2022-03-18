import Card from "./Card";

function Competencies(props) {
  return (
    <div className="tools">
      <div>
        <h2 className="workExperience-h2">Competencies</h2>
        <Card
          subtitle={props.data[0].subtitle}
          date={props.data[0].date}
          description={props.data[0].description}
        />
        
      </div>
    </div>
  );
}

export default Competencies;
