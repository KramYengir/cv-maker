import { useState } from "react";
import InputHeader from "./InputHeader";

const Education = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExpand = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section>
      <InputHeader title="Education" isOpen={isOpen} onClick={toggleExpand} />
    </section>
  );
};

export default Education;
