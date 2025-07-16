import { useState } from 'react';

const Dropdown1 = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[1040.31px] bg-white shadow rounded-2xl border border-gray-300 my-6 overflow-hidden font-montserrat">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-6"
        style={{ height: '99.08px', cursor: 'pointer' }}
      >
        <span className="text-2xl font-medium text-gray-800">{question}</span>
        <span className="text-gray-600 text-xl">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <>
          <hr className="border-t border-gray-300 mx-6" />
          <div className="px-6 pb-6 pt-4">
            <p className="text-gray-700 text-xl">{answer}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown1;
