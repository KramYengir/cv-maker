import { useState } from "react";
import InputHeader from "./input_components/InputHeader";

const personObj = { fullName: "", email: "", phone: "" };

const PersonalInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [personalInfo, setPersonalInfo] = useState(personObj);

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
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, fullName: e.target.value })
              }
              id="fullname"
              type="text"
              placeholder="First & Last Name.."
            ></input>
          </label>
          <label htmlFor="email">
            Email
            <input
              value={personalInfo.email}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, email: e.target.value })
              }
              id="email"
              type="email"
              placeholder="Email Address..."
            ></input>
          </label>
          <label htmlFor="phone">
            Phone
            <input
              value={personalInfo.phone}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, phone: e.target.value })
              }
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
