import { Link } from "react-router-dom";
import Logo from "../Logo";
import DiscoverButton from "./DiscoveryButton";

function DesktopNavbar() {
  return (
<nav className="hidden md:flex px-12 py-5 flex justify-between items-center w-screen bg-white">
      <div className="pr-12">
        <Logo className="fill-gold"></Logo>
      </div>

        <div className="flex gap-16 lg:gap-28">

            <Link to="/about" className="relative group">
                <span className="relative pb-1">
                  <span className="inline-block transition-transform duration-200 ease-out group-hover:scale-105">About</span>
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </span>
            </Link>
            <Link to="/services" className="relative group">
                <span className="relative pb-1">
                  <span className="inline-block transition-transform duration-200 ease-out group-hover:scale-105">Services</span>
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </span>
            </Link>
            <Link to="/#success-stories" className="relative group whitespace-nowrap">
                <span className="relative pb-1">
                  <span className="inline-block transition-transform duration-200 ease-out group-hover:scale-105">Success Stories</span>
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </span>
            </Link>
            <Link to="/internships" className="relative group">
                <span className="relative pb-1">
                  <span className="inline-block transition-transform duration-200 ease-out group-hover:scale-105">Internships</span>
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </span>
            </Link>
            <Link to="/faq" className="relative group">
                <span className="relative pb-1">
                  <span className="inline-block transition-transform duration-200 ease-out group-hover:scale-105">FAQ</span>
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </span>
            </Link>
        </div>

      <DiscoverButton/>
    </nav>

  );
}

export default DesktopNavbar;
