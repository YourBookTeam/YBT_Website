import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { FaAngleDown } from "react-icons/fa";
import Button from "./Button";

function NavBar() {
  return (
    <nav className="px-12 py-5 flex justify-between items-center w-screen bg-white">
      <div className="pr-12">
        <Logo></Logo>
      </div>

      <div className="flex gap-16 lg:gap-28">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>

        <div className="flex relative group">
          <div className="border-none bg-none cursor-pointer flex gap-2 items-center">
            Success Stories
            <FaAngleDown></FaAngleDown>
          </div>

          <div className="hidden group-hover:flex absolute top-full min-w-full bg-white px-2 py-1 flex-col gap-1">
            <Link to="/success_stories">
              <b>Thirst -</b> H.W. Terrence
            </Link>

            <div className="border-b border-black -mx-2"></div>

            <Link to="/success_stories">
              <b>Prompting Happiness -</b> Nimrod Vromen
            </Link>

            <div className="border-b border-black -mx-2"></div>

            <Link to="/success_stories">
              <b>Under the Floorboards -</b> John Kiss
            </Link>
          </div>
        </div>

        <Link to="/careers">Careers</Link>
        <Link to="/faq">FAQ</Link>
      </div>

      <div className="pl-12">
        <Button to="/contact" tall>
          Book a Free Consultation
        </Button>
      </div>
    </nav>
  );
}

export default NavBar;
