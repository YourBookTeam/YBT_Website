import { Link } from "react-router-dom";
import DiscoveryButton from "./DiscoveryButton";
import DesktopLogo from "../DesktopLogo";

function DesktopNavbar() {
  return (
    <nav className="hidden md:flex mb-4 px-2 lg:px-4 pt-5 pb-3 justify-between items-center w-screen bg-white border-b-3 border-[var(--color-light-gray)]">
      <div className="pr-6 lg:pr-12">
        <DesktopLogo className="fill-gold"></DesktopLogo>
      </div>

      <div className="flex gap-4 lg:gap-8">
        <Link to="/about" className="relative group">
          <span className="relative pb-1">
            <span className="inline-block text-sm lg:text-base transition-transform duration-200 ease-out group-hover:scale-105">
              ABOUT
            </span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </span>
        </Link>
        <Link to="/pricing" className="relative group">
          <span className="relative pb-1">
            <span className="inline-block text-sm lg:text-base transition-transform duration-200 ease-out group-hover:scale-105">
              PRICING
            </span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </span>
        </Link>
        <Link
          to="/#success-stories"
          className="relative group whitespace-nowrap"
        >
          <span className="relative pb-1">
            <span className="inline-block text-sm lg:text-base transition-transform duration-200 ease-out group-hover:scale-105">
              SUCCESS STORIES
            </span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </span>
        </Link>
        <Link to="/internships" className="relative group">
          <span className="relative pb-1">
            <span className="inline-block text-sm lg:text-base transition-transform duration-200 ease-out group-hover:scale-105">
              INTERNSHIPS
            </span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </span>
        </Link>
        <Link to="/faq" className="relative group">
          <span className="relative pb-1">
            <span className="inline-block text-sm lg:text-base transition-transform duration-200 ease-out group-hover:scale-105">
              FAQ
            </span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </span>
        </Link>
      </div>

      <DiscoveryButton />
    </nav>
  );
}

export default DesktopNavbar;
