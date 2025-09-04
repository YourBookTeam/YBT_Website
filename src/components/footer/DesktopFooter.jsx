import QuickLinks from "./QuickLinks";
import LogoSocials from "./LogoSocials";
import ContactInfo from "./ContactInfo";

const DesktopFooter = () => {
  return (
    <footer className="hidden md:flex px-5 pt-12 pb-4 items-center justify-center text-center">
        <QuickLinks/>
        <LogoSocials/>
        <ContactInfo/>
    </footer>
  );
};

export default DesktopFooter;
