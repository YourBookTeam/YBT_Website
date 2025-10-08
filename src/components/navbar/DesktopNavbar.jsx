import { Link, useLocation } from "react-router-dom";
import SvgNavbarLogo from "../svgs/SvgNavbarLogo";
import DiscoverButton from "./DiscoveryButton";

function DesktopNavbar() {
  const location = useLocation();
  
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  return (
    <nav className="hidden md:flex px-12 justify-between items-center w-screen bg-white">
      <div className="pr-12">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <SvgNavbarLogo className="fill-gold" />
        </Link>
      </div>

      <div className="flex gap-16 lg:gap-28">
        <Link to="/" className={`relative group ${isActive("/") ? "text-gold" : ""}`}>
          <span className="relative pb-1">
            <span className="inline-block font-['Poppins'] uppercase transition-transform duration-200 ease-out group-hover:scale-105" style={{ color: isActive("/") ? "" : "#424242" }}>
              HOME
            </span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </span>
        </Link>
        <Link to="/about" className={`relative group ${isActive("/about") ? "text-gold" : ""}`}>
          <span className="relative pb-1">
            <span className="inline-block font-['Poppins'] uppercase transition-transform duration-200 ease-out group-hover:scale-105" style={{ color: isActive("/about") ? "" : "#424242" }}>
              ABOUT
            </span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </span>
        </Link>
        <Link to="/services" className={`relative group ${isActive("/services") ? "text-gold" : ""}`}>
          <span className="relative pb-1">
            <span className="inline-block font-['Poppins'] uppercase transition-transform duration-200 ease-out group-hover:scale-105" style={{ color: isActive("/services") ? "" : "#424242" }}>
              SERVICES
            </span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </span>
        </Link>
        <Link
          to="/#success-stories"
          className={`relative group whitespace-nowrap ${isActive("/#success-stories") ? "text-gold" : ""}`}
        >
          <span className="relative pb-1">
            <span className="inline-block font-['Poppins'] uppercase transition-transform duration-200 ease-out group-hover:scale-105" style={{ color: isActive("/#success-stories") ? "" : "#424242" }}>
              SUCCESS STORIES
            </span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </span>
        </Link>
        <Link to="/internships" className={`relative group ${isActive("/internships") ? "text-gold" : ""}`}>
          <span className="relative pb-1">
            <span className="inline-block font-['Poppins'] uppercase transition-transform duration-200 ease-out group-hover:scale-105" style={{ color: isActive("/internships") ? "" : "#424242" }}>
              INTERNSHIPS
            </span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </span>
        </Link>
        <Link to="/faq" className={`relative group ${isActive("/faq") ? "text-gold" : ""}`}>
          <span className="relative pb-1">
            <span className="inline-block font-['Poppins'] uppercase transition-transform duration-200 ease-out group-hover:scale-105" style={{ color: isActive("/faq") ? "" : "#424242" }}>
              FAQ
            </span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </span>
        </Link>
      </div>

      <DiscoverButton />
    </nav>
  );
}

export default DesktopNavbar;
