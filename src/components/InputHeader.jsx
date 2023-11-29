import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const InputHeader = ({ title, isOpen, onClick }) => {
  return (
    <div className="input-header">
      <h2>{title}</h2>
      <button onClick={onClick}>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
    </div>
  );
};

export default InputHeader;
