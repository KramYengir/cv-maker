import { useState } from "react";

const ExperienceForm = ({ sendExperienceData }) => {
  const [experienceList, setExperienceList] = useState([
    { work: "", role: "", from: "", to: "", summary: "" },
  ]);

  const handleInputChange = (e, index, property) => {
    const updatedExperienceList = [...experienceList];
    updatedExperienceList[index][property] = e.target.value;
    setExperienceList(updatedExperienceList);
    sendExperienceData(updatedExperienceList);
  };

  const addExperience = () => {
    let areErrors = false;

    //check for empty fields
    Object.values(experienceList[experienceList.length - 1]).forEach((val) => {
      if (val === "") areErrors = true;
    });

    if (areErrors) return;

    setExperienceList([
      ...experienceList,
      { work: "", role: "", from: "", to: "", summary: "" },
    ]);
  };

  const deleteExperience = (index) => {
    const updatedExperienceList = [...experienceList];
    updatedExperienceList.splice(index, 1);
    setExperienceList(updatedExperienceList);
    sendExperienceData(updatedExperienceList);
  };

  return (
    <>
      {experienceList.map((experience, index) => (
        <form key={index}>
          <label>
            Employer/Project
            <input
              required
              type="text"
              placeholder="Software Inc, Manchester..."
              value={experience.work}
              onChange={(e) => handleInputChange(e, index, "work")}
            />
          </label>

          <label>
            Role
            <input
              required
              type="text"
              placeholder="Junior Software Developer..."
              value={experience.role}
              onChange={(e) => handleInputChange(e, index, "role")}
            />
          </label>

          <label>
            From
            <input
              required
              type="text"
              placeholder="Jan 2020"
              value={experience.from}
              onChange={(e) => handleInputChange(e, index, "from")}
            />
          </label>

          <label>
            To
            <input
              required
              type="text"
              placeholder="May 2023"
              value={experience.to}
              onChange={(e) => handleInputChange(e, index, "to")}
            />
          </label>

          <label>
            Summary
            <textarea
              required
              rows={5}
              maxLength={200}
              type="text"
              placeholder="I worked on..."
              value={experience.summary}
              onChange={(e) => handleInputChange(e, index, "summary")}
            />
          </label>

          {index !== experienceList.length - 1 && ( // Show delete button for all forms except the last one
            <button
              className="remove-btn"
              type="button"
              onClick={() => deleteExperience(index)}
            >
              Remove
            </button>
          )}

          {index === experienceList.length - 1 && (
            <button type="submit" onClick={addExperience}>
              Submit Experience
            </button>
          )}
        </form>
      ))}
    </>
  );
};

export default ExperienceForm;
