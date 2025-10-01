import QuickLinks from "./QuickLinks";
import LogoSocials from "./LogoSocials";
import ContactInfo from "./ContactInfo";
import MainLogo from "./MainLogo";
import Statement from "./Statement";

const DesktopFooter = () => {
  return (
    <footer className="hidden md:flex px-5 pt-12 pb-4 items-center justify-center text-center bg-black">
        <MainLogo/>
        <Statement/>
        {/* <QuickLinks/>
        <LogoSocials/>
        <ContactInfo/> */}
    </footer>
  );
};

export default DesktopFooter;
