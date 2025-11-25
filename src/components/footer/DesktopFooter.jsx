import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
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
  const backButtonRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const button = backButtonRef.current;
      if (!button) return;

      const isScrolled = window.scrollY > 250; 

      if (isScrolled) {
        button.classList.remove("hidden");
      } else {
        button.classList.add("hidden");
      }
    };
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="hidden md:flex flex-col bg-gold relative z-10">
      <div className="grid grid-cols-[auto_auto] justify-around w-full">
        <div className="flex flex-col gap-4 p-8 w-fit">
          <MainLogo />
          <Statement className="max-w-100 text-start" />
          <Socials />
        </div>

        <div className="flex justify-center items-center relative">
          <div className="flex z-10 gap-8 p-8 xl:gap-10 2xl:gap-20">
            <QuickLinks
              currentPage={currentPage.pathname}
              baseClass="flex flex-col gap-4 items-start text-white"
              listClass="flex flex-col text-sm lg:text-base 2xl:text-xl gap-1 items-start"
            />
 
            <ContactInfo
              baseClass="flex flex-col gap-4 text-white items-start"
              addressClass="min-w-56 ml-2 text-left"
            />
          </div>

          <div
            className="
                absolute z-0
                inset-y-0 left-1/2 -translate-x-1/2 
                flex items-center
              "
          >
            <Logo
              preserveAspectRatio="none"
              className="
                  fill-white opacity-15
                  h-full
                  w-auto
                  scale-x-130
                  scale-y-108
                  -translate-x-10
                "
            />
          </div>
        </div>
      </div>

      <div
        ref={backButtonRef}
        className="fixed right-8 bottom-12 z-50 hidden transition-opacity duration-300"
      >
        <BackButton />
      </div>

      <Copyright />
    </footer>
  );
};

export default DesktopFooter;
