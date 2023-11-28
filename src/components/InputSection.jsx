import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import "../styles/InputSection.css";

const InputSection = () => {
  return (
    <div className="input-section">
      <PersonalInfo />
      <Education />
      <Experience />
      <Skills />
    </div>
  );
};

export default InputSection;
