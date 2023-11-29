import { useState } from "react";
import InputHeader from "./input_components/InputHeader";
import EducationForm from "./input_components/EducationForm";

const Education = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExpand = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section>
      <InputHeader title="Education" isOpen={isOpen} onClick={toggleExpand} />
      {isOpen && <EducationForm />}
    </section>
  );
};

export default Education;
