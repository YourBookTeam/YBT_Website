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
    <footer className="hidden lg:flex flex-col bg-gold relative">
      <div className="w-full grid grid-cols-2">

        <div className="flex flex-col gap-10 p-15">
          <MainLogo/>
          <Statement className="max-w-[70%]"/>
          <Socials/>
          <BackButton/>
        </div>

        <div className="relative flex justify-center">
            <div className="flex gap-5 p-15 xl:gap-10 2xl:gap-20">
              <QuickLinks currentPage={currentPage.pathname}/>
              <ContactInfo/>
            </div>

            <div 
              className="
                absolute z-0
                inset-y-0 left-1/2 -translate-x-1/2
                flex items-center
              ">
              <Logo 
                preserveAspectRatio="none" 
                className="
                  fill-white opacity-15
                  h-full
                  w-auto
                  scale-x-150
                "/>
            </div>
        </div>
      </div>

      <Copyright/>
      
    </footer>
  );
};

export default DesktopFooter;
