import React from "react";
import { Link } from "react-router-dom";

const BookIdea = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center book-idea-bg" />
      <div className="absolute inset-0 bg-black/40" />
      <h2 className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg mb-8">
        Have a book idea or want to learn more?
      </h2>
      <Link
        to="/contact"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded transition-colors duration-200 text-lg shadow-md cursor-pointer inline-block relative"
      >
        Book a Free Consultation
      </Link>
    </div>
  );
};

export default BookIdea;
