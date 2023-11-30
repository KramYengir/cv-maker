import { useState } from "react";
import InputHeader from "./input_components/InputHeader";
import SkillsForm from "./input_components/SkillsForm";

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <InputHeader title="Skills" isOpen={isOpen} onClick={toggleExpand} />
      <div style={{ display: isOpen ? "block" : "none" }}>
        <SkillsForm />
      </div>
    </section>
  );
};

export default Skills;
