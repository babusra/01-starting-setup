import "./AcademicHistory.css";
import Card from "./Card";
import Item from "./Item";

function AcademicHistory(props) {
  return (
    <div className="academicHistory">
      <h2 className="academicHistory-h2">Academic History</h2>

      <Card
        subtitle={"Trakya University"}
        date={"2018 - Present"}
        description={
          "-Computer Engineering senior year student at Trakya University"
        }
      />
      <Card
        subtitle={"Etiler Anatolian Highschool"}
        date={"2014 - 2018"}
        description={"-Graduated"}
      />
    </div>
  );
}
export default AcademicHistory;
