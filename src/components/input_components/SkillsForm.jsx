import { useState } from "react";

const SkillsForm = ({ sendSkillsData }) => {
  const [skill, setSkill] = useState("");
  const [skillsList, setSkillsList] = useState([]);

  const handleSkillChange = (e) => {
    setSkill(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && skill.trim() !== "") {
      // Add the skill to the list when Enter is pressed
      setSkillsList([...skillsList, skill.trim()]);
      sendSkillsData([...skillsList, skill.trim()]);
      setSkill(""); // Clear the input
    }
  };

  const handleDeleteSkill = (index) => {
    const updatedSkillsList = [...skillsList];
    updatedSkillsList.splice(index, 1);
    setSkillsList(updatedSkillsList);
    sendSkillsData(updatedSkillsList);
  };

  const handleAddSkill = (e, skill) => {
    e.preventDefault();
    if (skill.trim() !== "" && skillsList.length !== 10) {
      // Add the skill to the list when the button is clicked
      setSkillsList([...skillsList, skill.trim()]);
      sendSkillsData([...skillsList, skill.trim()]);
      setSkill(""); // Clear the input
    }
  };

  return (
    <form>
      <p>Add up to 10 Skills...</p>
      <div className="skill-input">
        <input
          maxLength={25}
          type="text"
          value={skill}
          disabled={skillsList.length === 10}
          onChange={handleSkillChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter a skill..."
        />
        <button
          onClick={(e) => {
            handleAddSkill(e, skill);
          }}
          disabled={skillsList.length === 10}
        >
          Add Skill
        </button>
      </div>

      <ul>
        {skillsList.map((s, index) => (
          <li key={index}>
            {s}{" "}
            <button
              onClick={(e) => {
                e.preventDefault();
                handleDeleteSkill(index);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default SkillsForm;
