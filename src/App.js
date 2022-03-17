import Card from "./Components/Card";
import Images from "./Resources/Images";
import Photo from "./Components/Photo";
import Name from "./Components/Name";
import WorkExperience from "./Components/WorkExperience";
import "../src/App.css";
import AcademicHistory from "./Components/AcademicHistory";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Tools from "./Components/Tools";
import About from "./Components/About";
import Competencies from "./Components/Competencies";
import Lang from "./Components/Lang";

function App() {
  return (
    <div className="app">
      <div className="photo">
        <Photo photoUrl={Images.ben.default} />
      </div>
      <Name name={"Büşra ARIGÜN"} />
      <div className="app-workAcad">
        <div className="column">
          <About />
        </div>

        <div className="column">
          <Competencies />
        </div>
      </div>
      <div className="app-workAcad">
        <div className="column">
          <WorkExperience />
        </div>

        <div className="column">
          <AcademicHistory />
        </div>
      </div>
      <div className="app-workAcad">
        <div className="column">
          <Tools />
        </div>
        <div>
          <Lang/>
        </div>
      </div>
      <div className="column">
          <Projects />
        </div>
    </div>
  );
}

export default App;
