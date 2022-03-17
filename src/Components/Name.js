import "./Name.css";
import Contact from "./Contact";

function Name(props) {
  return (
    <div className="name">
      <h1 className="name-h1">{props.name}</h1>
      <Contact/>

    </div>
  );
}
export default Name;
