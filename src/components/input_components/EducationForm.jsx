import { useState } from "react";

const EducationForm = () => {
  const [educationList, setEducationList] = useState([
    { school: "", degree: "", from: "", to: "" },
  ]);

  const handleInputChange = (e, index, property) => {
    const updatedEducationList = [...educationList];
    updatedEducationList[index][property] = e.target.value;
    setEducationList(updatedEducationList);
  };

  const addEducation = () => {
    let areErrors = false;
    Object.values(educationList[educationList.length - 1]).forEach((val) => {
      if (val === "") areErrors = true;
    });

    if (areErrors) return;

    setEducationList([
      ...educationList,
      { school: "", degree: "", from: "", to: "" },
    ]);
  };

  return (
    <form>
      {educationList.map((education, index) => (
        <div key={index}>
          <label>
            School/Organization/Course
            <input
              required
              type="text"
              placeholder="University of..."
              value={education.school}
              onChange={(e) => handleInputChange(e, index, "school")}
            />
          </label>

          <label>
            Degree/Award{" "}
            <input
              required
              type="text"
              placeholder="Masters in..."
              value={education.degree}
              onChange={(e) => handleInputChange(e, index, "degree")}
            />
          </label>

          <label>
            From
            <input
              required
              type="date"
              value={education.from}
              onChange={(e) => handleInputChange(e, index, "from")}
            />
          </label>

          <label>
            To
            <input
              required
              type="date"
              value={education.to}
              onChange={(e) => handleInputChange(e, index, "to")}
            />
          </label>
        </div>
      ))}

      <button type="submit" onClick={addEducation}>
        Submit Education
      </button>
    </form>
  );
};

export default EducationForm;