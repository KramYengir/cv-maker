import { useState } from "react";
import InputHeader from "./input_components/InputHeader";
import SkillsForm from "./input_components/SkillsForm";

const Skills = ({ sendSkillsData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [skillsData, setSkillsData] = useState([]);

  const updateSkillsData = (newSkillsData) => {
    setSkillsData(newSkillsData);
    sendSkillsData(newSkillsData);
  };

  const toggleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <InputHeader title="Skills" isOpen={isOpen} onClick={toggleExpand} />
      <div style={{ display: isOpen ? "block" : "none" }}>
        <SkillsForm sendSkillsData={updateSkillsData} />
      </div>
    </section>
  );
};

export default Skills;
