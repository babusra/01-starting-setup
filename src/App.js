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
import { Data } from "./Data/Data";

function App() {


  return (
    <div className="app">
      <div className="photo">
        <Photo photoUrl={Images.ben.default} />
      </div>
      <Name name={"Büşra ARIGÜN"} />
      <div className="app-workAcad">
        <div className="column">
          <About data={Data.AboutData}/>
        </div>

        <div className="column">
          <Competencies data={Data.CompetenciesData} />
        </div>
      </div>
      <div className="app-workAcad">
        <div className="column">
          <WorkExperience data={Data.WorkData}/>
        </div>

        <div className="column">
          <AcademicHistory data={Data.AcademicData} />
        </div>
      </div>
      <div className="app-workAcad">
        <div className="column">
          <Tools data={Data.ToolsData} />
        </div>
        <div>
          <Lang data={Data.LangData}/>
        </div>
      </div>
      <div className="column">
          <Projects data={Data.ProjectsData}/>
        </div>
    </div>
  );
}

export default App;
