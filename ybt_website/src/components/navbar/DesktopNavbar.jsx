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
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/success-stories">Success Stories</Link>
            <Link to="/faq">FAQ</Link>
        </div>

      <DiscoverButton/>
    </nav>

    
  );
}

export default DesktopNavbar;
