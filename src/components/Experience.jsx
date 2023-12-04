import { useState } from "react";
import InputHeader from "./input_components/InputHeader";
import ExperienceForm from "./input_components/ExperienceForm";

const Experience = ({ sendExperienceData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [experienceData, setExperienceData] = useState([]);

  const updateExperienceData = (newExperienceData) => {
    setExperienceData(newExperienceData);
    sendExperienceData(newExperienceData);
  };

  const toggleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <InputHeader title="Experience" isOpen={isOpen} onClick={toggleExpand} />
      <div style={{ display: isOpen ? "block" : "none" }}>
        <ExperienceForm sendExperienceData={updateExperienceData} />
      </div>
    </section>
  );
};

export default Experience;
