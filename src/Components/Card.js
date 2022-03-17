import "./Card.css";
import Item from "./Item";

function Card(props) {
  return (
    <div className="card">
      <Item
        title={props.title}
        subtitle={props.subtitle}
        date={props.date}
        description={props.description}
        link={props?.link}
        linkText={props?.linkText}
      />
      {/* <Item title={"Academic"} subtitle={"Hakbim"} date={new Date(2022,3,17)} description={"Intern"}/> */}
    </div>
  );
}
export default Card;
