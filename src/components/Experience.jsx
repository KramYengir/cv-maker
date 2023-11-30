import { useState } from "react";
import InputHeader from "./input_components/InputHeader";
import ExperienceForm from "./input_components/ExperienceForm";

const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <InputHeader title="Experience" isOpen={isOpen} onClick={toggleExpand} />
      <div style={{ display: isOpen ? "block" : "none" }}>
        <ExperienceForm />
      </div>
    </section>
  );
};

export default Experience;
