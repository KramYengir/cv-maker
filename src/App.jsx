import "./styles/App.css";
import { useState } from "react";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import Preview from "./components/Preview";
import { FaRegFilePdf } from "react-icons/fa6";
import { MdOutlineAutoFixHigh } from "react-icons/md";
import { MdOutlineAutoFixOff } from "react-icons/md";
import html2pdf from "html2pdf.js";
import AutofillData from "./AutofillData";

function App() {
  const [isAutoFill, setIsAutoFill] = useState(true);

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

  const manageAutofill = () => {
    setIsAutoFill(!isAutoFill);
    if (isAutoFill) {
      updatePersonalData(AutofillData.dummyPersonalInfo);
      updateEducationData(AutofillData.dummyEducationInfo);
      updateExperienceData(AutofillData.dummyExperienceInfo);
      updateSkillsData(AutofillData.dummySkillsInfo);
    } else {
      updatePersonalData({
        fullName: "",
        location: "",
        email: "",
        phone: "",
      });
      updateEducationData([]);
      updateExperienceData([]);
      updateSkillsData([]);
    }
  };

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

  const exportToPDF = () => {
    const cvPreviewPage = document.getElementById("cv-preview");
    // eslint-disable-next-line no-undef
    html2pdf(cvPreviewPage);
  };

  return (
    <>
      <Header />
      <main>
        <div className="left-side">
          <div className="util-buttons">
            <button className="util-button" onClick={manageAutofill}>
              {isAutoFill ? <MdOutlineAutoFixHigh /> : <MdOutlineAutoFixOff />}
            </button>
            <button className="util-button" onClick={exportToPDF}>
              <FaRegFilePdf />
            </button>
          </div>
          <InputSection
            sendPersonalData={updatePersonalData}
            sendEducationData={updateEducationData}
            sendExperienceData={updateExperienceData}
            sendSkillsData={updateSkillsData}
          ></InputSection>
        </div>
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
