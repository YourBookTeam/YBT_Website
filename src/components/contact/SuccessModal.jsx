const SuccessModal = ({ onClose }) => {
  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-gray-300 bg-opacity-70 backdrop-blur-[1px] flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-xs lg:max-w-lg w-full p-4 sm:p-6 md:p-8 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--color-red)] hover:text-gray-600 text-2xl"
          aria-label="Close modal"
        >
          &times;
        </button>
        
        <div className="w-12 h-12 bg-[var(--color-green)] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg 
            className="w-10 h-10 text-green-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        
        <h2 className="text-base lg:text-xl font-bold text-center mb-3">
          Message Sent Successfully!
        </h2>
        <p className="max-w-sm lg:max-w-md text-xs lg:text-base text-gray-600 text-center mb-6">
          Thanks for contacting us! We will be in touch with you
          shortly.
        </p>
        
        <div className="text-center">
          <button
            onClick={onClose}
            className="bg-hero-black text-sm lg:text-base text-white px-6 py-3 rounded-md font-medium text-base hover:bg-gray-800 transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;