import "../styles/Preview.css";

const Preview = ({
  personalInfo,
  educationList,
  experienceList,
  skillsList,
}) => {
  return (
    <div className="preview-container">
      <div className="cv-preview">
        <div className="personal-info">
          <h2>{`${personalInfo.fullName}`}</h2>
          <h3>{`${personalInfo.location}`}</h3>
          <h3>{`${personalInfo.email}`}</h3>
          <h3>{`${personalInfo.phone}`}</h3>
        </div>

        <div className="education-info">
          {educationList && <h2>Education</h2>}
          {educationList &&
            educationList.map((entry, index) => {
              return (
                <div key={index}>
                  <h3>{entry.degree}</h3>
                  <h4>{entry.school}</h4>
                  {
                    <h5>
                      {entry.from !== "" && "From: " + entry.from + " - "}
                      {entry.to !== "" && "To: " + entry.to + " - "}
                    </h5>
                  }
                </div>
              );
            })}
        </div>
        <div className="experience-info">
          {experienceList && <h2>Experience</h2>}
          {experienceList &&
            experienceList.map((entry, index) => {
              return (
                <div key={index}>
                  <h3>{entry.role}</h3>
                  <h4>{entry.work}</h4>
                  <h5>
                    {entry.from !== "" && "From: " + entry.from + " - "}
                    {entry.to !== "" && "To: " + entry.to + " - "}
                  </h5>
                  <p>{entry.summary}</p>
                </div>
              );
            })}
        </div>
        <div className="skills-info">
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
