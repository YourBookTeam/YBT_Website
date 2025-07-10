import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BookIdea = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    navigate("/contact");
  };

  // Hide component on contact page
  if (location.pathname === "/contact") {
    return null;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center book-idea-bg" />
      <h2 className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg mb-8 [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8),_2px_-2px_4px_rgba(0,0,0,0.8),_-2px_2px_4px_rgba(0,0,0,0.8),_-2px_-2px_4px_rgba(0,0,0,0.8)]">
        Have a book idea or want to learn more?
      </h2>
      <button
        onClick={handleContactClick}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded transition-colors duration-200 text-lg shadow-md relative cursor-pointer"
      >
        Book a Free Consultation
      </button>
    </div>
  );
};

export default BookIdea;
