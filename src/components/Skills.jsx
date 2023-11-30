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
      <SkillsForm />
    </section>
  );
};

export default Skills;
