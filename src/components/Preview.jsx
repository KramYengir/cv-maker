import "../styles/Preview.css";

const Preview = ({
  personalInfo,
  educationInfo,
  experienceInfo,
  skillsInfo,
}) => {
  return (
    <div className="preview-container">
      <div className="cv-preview">
        <h2>{`${personalInfo.fullName}`}</h2>
        <h3>{`${personalInfo.email}`}</h3>
        <h3>{`${personalInfo.phone}`}</h3>
      </div>
    </div>
  );
};

export default Preview;
