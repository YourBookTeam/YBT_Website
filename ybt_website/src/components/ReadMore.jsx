import { useState } from 'react';

const ReadMore = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const half = Math.floor(text.length / 2);
  const preview = text.slice(0, half);
  const remainder = text.slice(half);

  return (
    <div
      className="bg-white shadow rounded p-6 flex justify-start"
      style={{ width: '1440px', paddingLeft: '120px', paddingRight: '60px' }} 
    >
      <div className="max-w-xl flex flex-col justify-between text-left h-full w-full">
        
        <h2 className="text-xl font-semibold mb-4">Services</h2>

        <p className="text-gray-700 text-base leading-relaxed">
          {preview}
          {!isExpanded ? '...' : remainder}
        </p>

        <div className="mt-4 flex justify-end">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-black-600 hover:text-black-800 transition"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
