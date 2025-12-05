// SuccessModal.jsx - Simple version matching your style
const SuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0  flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-8 relative animate-fade-in shadow-2xl border border-gray-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800"
        >
          ×
        </button>
        
        <div className="text-center">
          {/* Checkmark icon */}
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg 
              className="w-10 h-10 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="3" 
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for contacting us. We'll respond within 24 hours.
          </p>
          
          <button
            onClick={onClose}
            className="w-full bg-hero-black text-white px-4 py-3 font-bold text-xl shadow-lg cursor-pointer hover:bg-gray"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;