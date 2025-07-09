import { Link } from "react-router-dom";
import Logo from "../components/Logo";

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
          <button className="border-none bg-none cursor-pointer flex gap-2 items-center">
            Success Stories
            <i class="fa-solid fa-chevron-down"></i>
          </button>

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
        <Link
          to="/contact"
          className="!px-4 border-0 rounded-md bg-[#F5BE29] cursor-pointer h-16 !flex !items-center"
        >
          Book A Free Consultation
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
