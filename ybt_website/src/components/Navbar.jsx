import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Logo from "./Logo";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="px-12 py-5 flex justify-between items-center w-screen bg-white py-2">
      <div className="pr-12">
        <Logo className="fill-gold"></Logo>
      </div>

      <div className="flex gap-16 lg:gap-28">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <HashLink to="/#success-stories">Success Stories</HashLink>
        <Link to="/faq">FAQ</Link>
      </div>

      <div className="pl-12">
        <Button to="/contact" tall>Book a free discovery call</Button>
      </div>
    </nav>
  );
}

export default Navbar;
