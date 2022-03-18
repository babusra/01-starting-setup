import Card from "./Card";

function Lang(props) {
  return (
    <div className="lang">
      <div>
        <h2 className="workExperience-h2">Languages</h2>
        <Card
          subtitle={props.data[0].subtitle}
          date={props.data[0].date}
          description={props.data[0].description}
        />
        
      </div>
    </div>
  );
}

export default Lang;
