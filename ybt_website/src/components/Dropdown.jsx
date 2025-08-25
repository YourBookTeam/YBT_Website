import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Dropdown = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-[1040px] my-6 overflow-hidden mx-auto">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-6 h-24 cursor-pointer"
      >
        <span className="text-2xl font-medium">{question}</span>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <hr className="border-t border-gray-300 mx-6" />
      <div
        className={`px-6 pt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-xl font-secondary text-justify leading-loose">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Dropdown;
