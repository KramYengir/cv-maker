import { useState } from "react";
import InputHeader from "./InputHeader";

const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <InputHeader title="Experience" isOpen={isOpen} onClick={toggleExpand} />
    </section>
  );
};

export default Experience;
