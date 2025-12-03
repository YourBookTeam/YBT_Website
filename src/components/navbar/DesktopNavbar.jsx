import { Link } from "react-router-dom";
import DiscoveryButton from "./DiscoveryButton";
import DesktopLogo from "../DesktopLogo";

function DesktopNavbar() {
  return (
    <nav className="hidden md:flex px-2 lg:px-4 2xl:px-12 justify-between 2xl:justify-around items-center w-screen bg-white">
      <div className="pr-6 lg:pr-12">
        <DesktopLogo className="fill-gold -mt-2 lg:-mt-2 md:w-32 md:h-16 lg:w-40 lg:h-16 2xl:w-60 2xl:h-20"></DesktopLogo>
      </div>

      <div className="flex items-center gap-4 lg:gap-16">
        <div className="flex gap-8 lg:gap-12">
          <Link to="/" className="relative group">
            <span className="relative pb-0.5">
              <span className="inline-block text-sm 2xl:text-lg transition-transform duration-200 ease-out group-hover:scale-105">
                HOME
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </span>
          </Link>
          <Link to="/about" className="relative group">
            <span className="relative pb-0.5">
              <span className="inline-block text-sm 2xl:text-lg transition-transform duration-200 ease-out group-hover:scale-105">
                ABOUT
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </span>
          </Link>
          <Link to="/pricing" className="relative group">
            <span className="relative pb-0.5">
              <span className="inline-block text-sm 2xl:text-lg transition-transform duration-200 ease-out group-hover:scale-105">
                PRICING
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </span>
          </Link>
          <Link
            to="/#success-stories"
            className="relative group whitespace-nowrap"
          >
            <span className="relative pb-0.5">
              <span className="inline-block text-sm 2xl:text-lg transition-transform duration-200 ease-out group-hover:scale-105">
                SUCCESS STORIES
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </span>
          </Link>
          <Link to="/internships" className="relative group">
            <span className="relative pb-0.5">
              <span className="inline-block text-sm 2xl:text-lg transition-transform duration-200 ease-out group-hover:scale-105">
                INTERNSHIPS
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </span>
          </Link>
          <Link to="/faq" className="relative group">
            <span className="relative pb-0.5">
              <span className="inline-block text-sm 2xl:text-lg transition-transform duration-200 ease-out group-hover:scale-105">
                FAQ
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </span>
          </Link>
        </div>
        <DiscoveryButton/>
      </div>
    </nav>
  );
}

export default DesktopNavbar;
