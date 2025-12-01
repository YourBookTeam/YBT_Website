import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/paper_pen.jpg";
import Image2 from "../../assets/library_book_shelves.jpg";
import Image3 from "../../assets/woman_rr.jpg";
import { Progress } from "./progress";

const DesktopBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

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

  const goToSlide = useCallback(
    (index) => {
      setCurrentSlide(index);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(nextSlide, 6000);
    },
    [nextSlide]
  );

  // Autoplay setup
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 6000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  useEffect(() => {
    setProgress(0);
    const step = 100 / (6000 / 100);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + step;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div
      role="region"
      aria-label="Image carousel"
      aria-live="polite"
      className="hidden lg:block relative w-full h-[60vh] min-h-[600px] overflow-hidden bg-gray"
    >
      {/* Screen reader announcement */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentSlide + 1} of {slides.length}:{" "}
        {slides[currentSlide].title}
      </div>

      {/* Main Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out
             ${index === currentSlide ? "opacity-100" : "opacity-0"}
           `}
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col gap-10 items-center justify-center">
              <div className="container mx-auto">
                <div className="max-w-2xl 2xl:max-w-4xl mx-auto flex flex-col items-center">
                  <h1
                    className={`text-5xl 2xl:text-7xl text-center font-bold text-white mb-6 leading-tight
                    transition-all duration-[1200ms] ease-out
                    ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-6 scale-[.96]"
                    }
                  `}
                  >
                    {slide.title}
                  </h1>

                  <p
                    className={`text-2xl 2xl:text-3xl text-center italic text-white mb-8 leading-relaxed max-w-2xl
                  transition-all duration-[1200ms] ease-out delay-150
                  ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }
                `}
                  >
                    {slide.description}
                  </p>

                  <Link to="/pricing">
                    <button className="px-10 py-3 bg-white border border-[var(--color-gold)] text-[var(--color-gold)] rounded-lg font-semibold text-sm cursor-pointer hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-2xl">
                      {slide.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-16">
          {slides.map((slide, index) => (
            <div key={slide.id} className="flex flex-col gap-2 items-center">
              <button
                onClick={() => goToSlide(index)}
                className={`flex items-center cursor-pointer space-x-3 transition-all duration-300 group h-10 ${
                  index === currentSlide
                    ? "text-white scale-110"
                    : "text-white/60 hover:text-opacity-100 group-hover:scale-105"
                }`}
              >
                <div>{slide.icon}</div>
                <span className="text-xs font-medium whitespace-nowrap hover:scale-105">
                  {slide.category}
                </span>
              </button>

              {/* Progress Indicator */}
              <Progress
                value={index === currentSlide ? progress : 0}
                className={`w-full h-1 transition-all ${
                  index === currentSlide
                    ? "bg-white"
                    : "bg-white/20 [&>div]:bg-white/40"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopBanner;
