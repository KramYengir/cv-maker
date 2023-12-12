import "../styles/Preview.css";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

const Preview = ({
  personalInfo,
  educationList,
  experienceList,
  skillsList,
}) => {
  return (
    <div className="preview-container">
      <div className="cv-preview" id="cv-preview">
        <div className="personal-info">
          <h2>{personalInfo && `${personalInfo.fullName}`}</h2>
          <div className="personal-details">
            <div>
              {personalInfo.location && <CiLocationOn className="icon" />}
              <h3>{personalInfo.location}</h3>
            </div>
            <div>
              {personalInfo.email && <AiOutlineMail className="icon" />}
              <h3>{personalInfo.email}</h3>
            </div>
            <div>
              {personalInfo.phone && <CiPhone className="icon" />}
              <h3>{personalInfo.phone}</h3>
            </div>
          </div>
        </div>

        <div className="education-section info">
          {educationList.some((exp) =>
            Object.values(exp).some((value) => value !== "")
          ) && <h2>Education</h2>}
          {educationList &&
            educationList.map((entry, index) => {
              return (
                <div key={index} className="education-entry">
                  <h3>{entry.school}</h3>
                  <h4>{entry.degree}</h4>
                  {
                    <h5>
                      {entry.from !== "" && "From: " + entry.from + " - "}
                      {entry.to !== "" && "To: " + entry.to}
                    </h5>
                  }
                </div>
              );
            })}
        </div>
        <div className="experience-section info">
          {experienceList.some((exp) =>
            Object.values(exp).some((value) => value !== "")
          ) && <h2>Experience</h2>}
          {experienceList &&
            experienceList.map((entry, index) => {
              return (
                <div key={index} className="experience-entry">
                  <div className="entry-details">
                    <h3>{entry.role}</h3>
                    <h4>{entry.work}</h4>
                    <h5>
                      {entry.from !== "" && "From: " + entry.from + " - "}
                      {entry.to !== "" && "To: " + entry.to}
                    </h5>
                  </div>
                  <p>{entry.summary}</p>
                </div>
              );
            })}
        </div>
        <div className="skills-section info">
          {skillsList.length !== 0 && <h2>Skills</h2>}
          <div className="skills-list">
            {skillsList &&
              skillsList.map((skill, index) => {
                return (
                  <div key={index}>
                    <li>{skill}</li>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
