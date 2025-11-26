import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/paper_pen.jpg";
import Image2 from "../../assets/library_book_shelves.jpg";
import Image3 from "../../assets/woman_rr.jpg";

const MobileAutoBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Your Story Deserves to Be Read",
      description: "From manuscript to masterpiece—we publish your dreams.",
      buttonText: "Start Publishing Today",
      image: Image,
      category: "Bring Your Story To Life",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "End-to-End Publishing Solutions",
      description: "Editing, design, marketing—we handle it all for you.",
      buttonText: "Explore Our Services",
      image: Image2,
      category: "Professional Publishing Made Simple",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Your Book, Our Passion",
      description:
        "We've helped many writers become published authors—be next!",
      buttonText: "Get Published Now",
      image: Image3,
      category: "Get Published Now",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="7" r="4" />
          <circle cx="8" cy="15" r="4" />
          <circle cx="16" cy="15" r="4" />
        </svg>
      ),
    },
  ];

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <div className="block lg:hidden relative w-full h-[60vh] min-h-[600px] overflow-hidden">
      {/* Main Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
              index === currentSlide
                ? "translate-x-0 opacity-100"
                : index < currentSlide
                ? "-translate-x-full opacity-0"
                : "translate-x-full opacity-0"
            }`}
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-opacity-70" />
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col gap-8 items-center justify-center">
              <div className="container mx-auto">
                <div className="max-w-2xl mx-auto flex flex-col items-center">
                  <h1
                    className="text-4xl max-w-80 md:max-w-100 text-center font-bold text-white mb-6 leading-tight 
                  drop-shadow-2xl [text-shadow:0_4px_12px_rgba(0,0,0,0.8)]"
                  >
                    {slide.title}
                  </h1>

                  <p
                    className="text-xl text-center italic text-white mb-8 leading-relaxed max-w-2xl
                  drop-shadow-lg [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]"
                  >
                    {slide.description}
                  </p>

                  <Link to="/pricing">
                    <button className="px-6 py-3 bg-white border border-[var(--color-gold)] text-[var(--color-gold)] rounded-lg font-semibold text-xs hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-2xl">
                      {slide.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-110"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </div>


      {/* Auto-play Toggle Button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-4 right-4 w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-black text-xs hover:bg-opacity-30 transition-all duration-300"
      >
        {isAutoPlaying ? "❚❚" : "▶"}
      </button>
    </div>
  );
};

export default MobileAutoBanner;