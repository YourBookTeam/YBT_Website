import { useState } from 'react';

const Dropdown2 = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-[1300px] bg-white rounded-xl shadow border border-gray-300 my-4 overflow-hidden"
      style={{ backgroundColor: '#F9F9F9' }}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-6"
        style={{ height: '65px', cursor: 'pointer' }}
      >
        <span className="text-gray-800 text-lg font-medium">{question}</span>
        <span className="text-gray-600 text-xl">{isOpen ? '˄' : '˅'}</span>
      </div>

      {isOpen && (
        <>
          <hr className="border-t border-gray-300 mx-6" />
          <div className="px-6 py-4">
            <p className="text-gray-700">{answer}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown2;
