import { useLocation } from "react-router-dom";
import QuickLinks from "./QuickLinks";
import Socials from "./Socials";
import ContactInfo from "./ContactInfo";
import Logo from "../svgs/SvgLogo";
import MainLogo from "./MainLogo";
import Statement from "./Statement";
import Copyright from "./Copyright";
import BackButton from "./BackButton";

const DesktopFooter = () => {
  const currentPage = useLocation();

  return (
    <footer className="hidden lg:flex flex-col bg-gold">
      <div className="w-full flex justify-between 2xl:justify-center p-15">

        <div className="flex flex-col gap-10">
          <MainLogo/>
          <Statement className="max-w-[60%]"/>
          <Socials/>
          <BackButton/>
        </div>

        <div className="relative">
          <div className="relative z-10 flex gap-5 xl:gap-10 2xl:gap-20">
            <QuickLinks currentPage={currentPage.pathname}/>
            <ContactInfo/>
          </div>
          <div className="absolute left-0 right-[15%] top-0 bottom-0 flex items-center justify-center z-0">
            <Logo className="fill-white size-[143%] opacity-15"/>
          </div>
        </div>

      </div>

      <Copyright/>
      
    </footer>
  );
};

export default DesktopFooter;
