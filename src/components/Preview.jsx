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
        <h2>{`${personalInfo.fullName}`}</h2>
        <h3>{`${personalInfo.email}`}</h3>
        <h3>{`${personalInfo.phone}`}</h3>

        {educationList &&
          educationList.map((entry, index) => {
            return (
              <div key={index}>
                <h3>{entry.school}</h3>
                <h4>{entry.degree}</h4>
                <p>
                  From: {entry.from} - To: {entry.to}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Preview;
