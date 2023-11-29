import { useState } from "react";
import InputHeader from "./input_components/InputHeader";

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <InputHeader title="Skills" isOpen={isOpen} onClick={toggleExpand} />
    </section>
  );
};

export default Skills;