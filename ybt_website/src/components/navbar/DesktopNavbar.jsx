import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function DesktopNavbar() {
  return (
    <div className="hidden md:flex gap-16 lg:gap-28">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <HashLink smooth to="/#success-stories">Success Stories</HashLink>
        <Link to="/faq">FAQ</Link>
    </div>
  );
}

export default DesktopNavbar;
