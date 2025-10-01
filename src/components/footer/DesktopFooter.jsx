import QuickLinks from "./QuickLinks";
import Socials from "./Socials";
import ContactInfo from "./ContactInfo";
import MainLogo from "./MainLogo";
import Statement from "./Statement";
import Copyright from "./Copyright";

const DesktopFooter = () => {
  return (
    <footer className="hidden md:flex flex-col px-5 pt-12 pb-4 items-center justify-center text-center bg-gold">
      <div className="flex">

        <div className="w-[50%]">
          <MainLogo/>
          <Statement/>
          <Socials/>
        </div>

        <div className="w-[50%]">
          <QuickLinks/>
          <ContactInfo/>
        </div>

      </div>

      <Copyright/>
      
    </footer>
  );
};

export default DesktopFooter;
