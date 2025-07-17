import React from "react";
import Button from "./Buttons";

const BookIdea = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center book-idea-bg" />
      <div className="absolute inset-0 bg-black/40" />
      <h2 className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg mb-8">
        Have a book idea or want to learn more?
      </h2>
      <Button
        to="/contact"
        className="bg-saffron hover:bg-dark-saffron text-black font-semibold px-7 py-2 rounded-lg transition-colors duration-200 text-lg shadow-md cursor-pointer inline-block relative"
      >
        Book a Free Consultation
      </Button>
    </div>
  );
};

export default BookIdea;
