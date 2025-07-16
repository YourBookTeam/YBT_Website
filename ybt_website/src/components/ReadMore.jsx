import { useState } from 'react';

const ReadMore = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const half = Math.floor(text.length / 2);
  const preview = text.slice(0, half);
  const remainder = text.slice(half);

  return (
    <div className="p-0 flex justify-start w-full">
      <div className="max-w-xl w-full ml-[150px] flex flex-col justify-between text-left">
        <p className="text-gray-700 text-base leading-relaxed">
          {preview}
          {!isExpanded ? '...' : remainder}
        </p>

        <div className="mt-4 flex justify-end">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-black hover:text-black/80 transition flex items-center gap-2"
          >
            {isExpanded ? 'Read Less ↑' : 'Read More ↓'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
