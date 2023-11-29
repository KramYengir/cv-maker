import { useState } from "react";
import InputHeader from "./InputHeader";

const PersonalInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              id="fullname"
              type="text"
              placeholder="First & Last Name.."
            ></input>
          </label>
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              placeholder="Email Address..."
            ></input>
          </label>
          <label htmlFor="phone">
            Phone
            <input
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
