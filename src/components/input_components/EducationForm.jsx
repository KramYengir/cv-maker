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

    //check for empty fields
    Object.values(educationList[educationList.length - 1]).forEach((val) => {
      if (val === "") areErrors = true;
    });

    if (areErrors) return;

    setEducationList([
      ...educationList,
      { school: "", degree: "", from: "", to: "" },
    ]);
  };

  const deleteEducation = (index) => {
    const updatedEducationList = [...educationList];
    updatedEducationList.splice(index, 1);
    setEducationList(updatedEducationList);
  };

  return (
    <>
      {educationList.map((education, index) => (
        <form key={index}>
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
            Degree/Award
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
              type="text"
              placeholder="Jan 2020"
              value={education.from}
              onChange={(e) => handleInputChange(e, index, "from")}
            />
          </label>

          <label>
            To
            <input
              required
              type="text"
              placeholder="May 2023"
              value={education.to}
              onChange={(e) => handleInputChange(e, index, "to")}
            />
          </label>

          {index !== educationList.length - 1 && ( // Show delete button for all forms except the last one
            <button
              className="remove-btn"
              type="button"
              onClick={() => deleteEducation(index)}
            >
              Remove
            </button>
          )}

          {index === educationList.length - 1 && (
            <button type="submit" onClick={addEducation}>
              Submit Education
            </button>
          )}
        </form>
      ))}
    </>
  );
};

export default EducationForm;
