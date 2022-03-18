import "./AcademicHistory.css";
import Card from "./Card";
import Item from "./Item";

function AcademicHistory(props) {
  return (
    <div className="academicHistory">
      <h2 className="academicHistory-h2">Academic History</h2>

      <Card
        subtitle={props.data[0].subtitle}
        date={props.data[0].date}
        description={props.data[0].description}
      />
      <Card
        subtitle={props.data[1].subtitle}
        date={props.data[1].date}
        description={props.data[1].description}
      />
    </div>
  );
}
export default AcademicHistory;
