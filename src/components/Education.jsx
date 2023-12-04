import { useState } from "react";
import InputHeader from "./input_components/InputHeader";
import EducationForm from "./input_components/EducationForm";

const Education = ({ sendEducationData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [educationData, setEducationData] = useState([]);

  const toggleExpand = () => {
    setIsOpen(!isOpen);
  };

  const updateEducationData = (newEducationData) => {
    setEducationData(newEducationData);
    sendEducationData(newEducationData);
  };

  return (
    <section>
      <InputHeader title="Education" isOpen={isOpen} onClick={toggleExpand} />
      <div style={{ display: isOpen ? "block" : "none" }}>
        <EducationForm
          key="educationFormKey" // Add a key prop
          educationData={educationData}
          sendEducationData={updateEducationData}
        />
      </div>
    </section>
  );
};

export default Education;
