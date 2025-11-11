import { Link } from "react-router-dom";
import Logo from "../Logo";
import DiscoveryButton from "./DiscoveryButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoChevronRight } from "react-icons/go";
import { HiMiniXMark } from "react-icons/hi2";
import { useState, useEffect } from "react";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleOpen = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setIsOpen(!isOpen);

    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  const handleLinkClick = () => {
    toggleOpen();

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (isOpen) {
      body.classList.add("overflow-hidden");
      html.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
      html.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && isOpen) {
        setIsOpen(false);
      }

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  return (
    <>
      <div className="md:hidden h-20"></div>

      <div
        className={`md:hidden flex px-8 py-4 justify-between items-center w-screen bg-white fixed top-0 left-0 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="pr-12">
          <Logo className="fill-gold" onClick={toggleOpen}></Logo>
        </div>

        <div className="relative">
          <RxHamburgerMenu
            className={`text-gold size-10 cursor-pointer transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-0 rotate-180 scale-0"
                : "opacity-100 rotate-0 scale-100"
            }`}
            onClick={toggleOpen}
          />
          <HiMiniXMark
            className={`text-gold size-10 cursor-pointer absolute top-0 left-0 transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 rotate-180 scale-0"
            }`}
            onClick={toggleOpen}
          />
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-400 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="pt-20 px-8 pb-8 h-full flex flex-col justify-center">
          <div className="flex flex-col gap-8 mb-12">
            <Link
              to="/about"
              onClick={handleLinkClick}
              className={`flex gap-1 items-center justify-center transition-all duration-500 ease-out group relative ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? "0.1s" : "0s" }}
            >
              <span className="relative inline-block">
                <p className="text-2xl font-bold transition-transform duration-200 ease-out group-hover:scale-105">
                  About
                </p>
                <span className="absolute left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </span>
              <GoChevronRight className="mt-1 text-xl" />
            </Link>

            <Link
              to="/pricing"
              onClick={handleLinkClick}
              className={`flex gap-1 items-center justify-center transition-all duration-500 ease-out group relative ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? "0.2s" : "0s" }}
            >
              <span className="relative inline-block">
                <p className="text-2xl font-bold transition-transform duration-200 ease-out group-hover:scale-105">
                  Pricing
                </p>
                <span className="absolute left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </span>
              <GoChevronRight className="mt-1 text-xl" />
            </Link>

            <Link
              to="/#success-stories"
              onClick={toggleOpen}
              className={`flex gap-1 items-center justify-center transition-all duration-500 ease-out group relative ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? "0.3s" : "0s" }}
            >
              <span className="relative inline-block">
                <p className="text-2xl font-bold transition-transform duration-200 ease-out group-hover:scale-105">
                  Success Stories
                </p>
                <span className="absolute left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </span>
              <GoChevronRight className="mt-1 text-xl" />
            </Link>

            <Link
              to="/faq"
              onClick={handleLinkClick}
              className={`flex gap-1 items-center justify-center transition-all duration-500 ease-out group relative ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? "0.4s" : "0s" }}
            >
              <span className="relative inline-block">
                <p className="text-2xl font-bold transition-transform duration-200 ease-out group-hover:scale-105">
                  FAQ
                </p>
                <span className="absolute left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </span>
              <GoChevronRight className="mt-1 text-xl" />
            </Link>

            <Link
              to="/internships"
              onClick={handleLinkClick}
              className={`flex gap-1 items-center justify-center transition-all duration-500 ease-out group relative ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? "0.5s" : "0s" }}
            >
              <span className="relative inline-block">
                <p className="text-2xl font-bold transition-transform duration-200 ease-out group-hover:scale-105">
                  Internships
                </p>
                <span className="absolute left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </span>
              <GoChevronRight className="mt-1 text-xl" />
            </Link>
          </div>
          <div
            className={`flex justify-center transition-all duration-500 ease-out ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? "0.5s" : "0s" }}
          >
            <DiscoveryButton onClick={handleLinkClick} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileNavbar;
