import AcademicHistory from "./AcademicHistory";
import Card from "./Card";
import "./WorkExperience.css";

function WorkExperience() {
  return (
    <div className="workExperience">
      <div>
          <h2 className="workExperience-h2">Work Experience</h2>
        <Card
          subtitle={"Hakbim Bilgi İşlem A.Ş"}
          date={"August 2021 - 1 month"}
          description={"-Web Development Intern"}
        />
        <Card
          subtitle={"Bulut MD Yazılım LTD. ŞTİ."}
          date={"December 2021 - Present"}
          description={"-Mobile Application Developer"}
        />
      </div>
    </div>
  );
}

export default WorkExperience;
