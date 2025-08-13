import { useState } from 'react';

const Dropdown = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-[1040px] my-6 overflow-hidden mx-auto">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-6 h-24 cursor-pointer"
      >
        <span className="text-2xl font-medium">{question}</span>
        <span className="font-secondary text-2xl">{isOpen ? '↑' : '↓'}</span>

      </div>

      </div>
      <hr className="border-t border-gray-300 mx-6" />
      {isOpen && (
        <>
          <div className="px-6 pb-6 pt-4">
            <p className="text-xl font-secondary text-justify leading-loose">{answer}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown;