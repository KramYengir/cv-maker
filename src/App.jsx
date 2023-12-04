import "./styles/App.css";
import { useState } from "react";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import Preview from "./components/Preview";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
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
  };

  const updateEducationData = (newEducationData) => {
    setEducationList(newEducationData);
    console.table(newEducationData);
  };

  const updateExperienceData = (newExperienceData) => {
    setExperienceList(newExperienceData);
  };

  const updateSkillsData = (newSkillsData) => {
    setSkillsList(newSkillsData);
  };

  return (
    <>
      <Header />
      <main>
        <InputSection
          sendPersonalData={updatePersonalData}
          sendEducationData={updateEducationData}
          sendExperienceData={updateExperienceData}
          sendSkillsData={updateSkillsData}
        ></InputSection>
        <Preview
          personalInfo={personalInfo}
          educationList={educationList}
          experienceList={experienceList}
          skillsList={skillsList}
        ></Preview>
      </main>
    </>
  );
}

export default App;
