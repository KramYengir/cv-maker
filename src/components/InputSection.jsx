import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import "../styles/InputSection.css";
import { useState } from "react";

const InputSection = ({
  sendPersonalData,
  sendEducationData,
  sendExperienceData,
  sendSkillsData,
}) => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    location: "",
    email: "",
    phone: "",
  });

  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([
    { work: "", role: "", from: "", to: "", summary: "" },
  ]);

  const [skillsList, setSkillsList] = useState([]);

  const updatePersonalData = (newPersonalData) => {
    setPersonalInfo(newPersonalData);
    sendPersonalData(newPersonalData);
  };

  const updateEducationData = (newEducationData) => {
    setEducationList(newEducationData);
    sendEducationData(newEducationData);
    // console.table(newEducationData);
  };

  const updateExperienceData = (newExperienceData) => {
    setExperienceList(newExperienceData);
    sendExperienceData(newExperienceData);
  };

  const updateSkillsData = (newSkillsData) => {
    setSkillsList(newSkillsData);
    sendSkillsData(newSkillsData);
  };

  return (
    <div className="input-section">
      <PersonalInfo sendPersonaldata={updatePersonalData} />
      <Education sendEducationData={updateEducationData} />
      <Experience sendExperienceData={updateExperienceData} />
      <Skills sendSkillsData={updateSkillsData} />
    </div>
  );
};

export default InputSection;
