import { useState } from 'react';

const Dropdown1 = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-[1040px] my-6 overflow-hidden mx-auto">
    <div className="w-full max-w-[1040px] my-6 overflow-hidden mx-auto">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-6 h-[99.08px] cursor-pointer"
        className="flex items-center justify-between px-6 h-[99.08px] cursor-pointer"
      >
        <span className="text-2xl font-medium text-gray-800">{question}</span>
        <span className="font-secondary font-light text-gray-600 text-2xl">{isOpen ? '↑' : '↓'}</span>

      </div>

      </div>
      <hr className="border-t border-gray-300 mx-6" />
      <hr className="border-t border-gray-300 mx-6" />
      {isOpen && (
        <>
          <div className="px-6 pb-6 pt-4">
            <p className="text-gray-700 text-xl font-secondary">{answer}</p>
            <p className="text-gray-700 text-xl font-secondary">{answer}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown1;