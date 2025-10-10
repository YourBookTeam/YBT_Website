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
    <footer className="hidden lg:flex flex-col bg-gold relative z-10">
      <div className="grid grid-cols-[auto_auto] justify-around w-full">

        <div className="flex flex-col gap-10 p-15 w-fit">
            <MainLogo/>
            <Statement className="max-w-100 text-start"/>
            <Socials/>
            <BackButton/>
        </div>

        <div className="relative flex justify-center items-center">
            <div className="flex z-10 gap-5 p-15 xl:gap-10 2xl:gap-20">
              <QuickLinks 
                currentPage={currentPage.pathname} 
                baseClass="flex flex-col gap-6 items-start text-white"
                listClass="flex flex-col text-xl gap-2 items-start"
              />
              <ContactInfo
                baseClass="flex flex-col gap-6 text-white items-start"
                addressClass="min-w-56 ml-2 text-left"
              />
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
                  scale-x-130
                  scale-y-108
                  -translate-x-10
                "/>
            </div>
        </div>
      </div>

      <Copyright/>
      
    </footer>
  );
};

export default DesktopFooter;
