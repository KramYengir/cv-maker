import { useState } from "react";
import InputHeader from "./input_components/InputHeader";

const personObj = { fullName: "", email: "", phone: "" };

const PersonalInfo = ({ sendPersonaldata }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [personalInfo, setPersonalInfo] = useState(personObj);

  const handleInputChange = (e, field) => {
    let updatedData = { ...personalInfo, [field]: e.target.value };
    setPersonalInfo(updatedData);
    sendPersonaldata(updatedData);
  };

  const toggleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <InputHeader
        title="Personal Info"
        isOpen={isOpen}
        onClick={toggleExpand}
      />
      {isOpen && (
        <form action="#">
          <label htmlFor="fullname">
            Full Name
            <input
              value={personalInfo.fullName}
              onChange={(e) => handleInputChange(e, "fullName")}
              id="fullname"
              type="text"
              placeholder="First & Last Name.."
            ></input>
          </label>
          <label htmlFor="email">
            Email
            <input
              value={personalInfo.email}
              onChange={(e) => handleInputChange(e, "email")}
              id="email"
              type="email"
              placeholder="Email Address..."
            ></input>
          </label>
          <label htmlFor="phone">
            Phone
            <input
              value={personalInfo.phone}
              onChange={(e) => handleInputChange(e, "phone")}
              id="phone"
              type="phone"
              placeholder="Phone Number..."
            ></input>
          </label>
        </form>
      )}
    </section>
  );
};

export default PersonalInfo;
