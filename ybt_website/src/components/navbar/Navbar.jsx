import Logo from "../Logo";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import DiscoverButton from "./DiscoveryButton";

function Navbar() {
  return (
    <nav className="px-12 py-5 flex justify-between items-center w-screen bg-white py-2">
      <div className="pr-12">
        <Logo className="fill-gold"></Logo>
      </div>

      <DesktopNavbar/>
      <DiscoverButton/>
      
      <MobileNavbar/>

    </nav>
  );
}

export default Navbar;
