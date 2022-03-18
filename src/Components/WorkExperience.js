import AcademicHistory from "./AcademicHistory";
import Card from "./Card";
import "./WorkExperience.css";

function WorkExperience(props) {
  // const data=[
  //   {id:1, subtitle:"Hakbim Bilgi İşlem A.Ş", date:"August 2021 - 1 month",description:"-Web Development Intern"},
  //   {id:2, subtitle:"Bulut MD Yazılım LTD. ŞTİ.", date:"December 2021 - Present", description:"-Mobile Application Developer"}
  // ]
  return (
    <div className="workExperience">
      <div>
          <h2 className="workExperience-h2">Work Experience</h2>
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
    </div>
  );
}

export default WorkExperience;
