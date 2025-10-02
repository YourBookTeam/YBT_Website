import QuickLinks from "./QuickLinks";
import Socials from "./Socials";
import ContactInfo from "./ContactInfo";
import MainLogo from "./MainLogo";
import Statement from "./Statement";
import Copyright from "./Copyright";
import BackButton from "./BackButton";

const DesktopFooter = () => {
  return (
    <footer className="hidden md:flex flex-col pt-12 gap-20 items-center justify-center text-center bg-gold">
      <div className="flex gap-20">

        <div className="w-[50%] flex flex-col gap-10 pl-10">
          <MainLogo/>
          <Statement/>
          <Socials/>
          <BackButton/>
        </div>

        <div className="w-[50%] flex gap-20 pr-10">
          <QuickLinks/>
          <ContactInfo/>
        </div>

      </div>

      <Copyright/>
      
    </footer>
  );
};

export default DesktopFooter;
