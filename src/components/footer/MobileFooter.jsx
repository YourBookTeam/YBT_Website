import { useLocation } from "react-router-dom";
import QuickLinks from "./QuickLinks";
import Socials from "./Socials";
import ContactInfo from "./ContactInfo";
import MainLogo from "./MainLogo";
import Statement from "./Statement";
import Copyright from "./Copyright";

const MobileFooter = () => {
  const currentPage = useLocation();

  return (
    <footer className="relative md:hidden bg-gold items-center justify-center text-center">
      <div className="px-5 py-8 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-5">
          <MainLogo />
          <Statement />
        </div>

        <div className="flex flex-col items-center gap-4">
          <QuickLinks
            currentPage={currentPage.pathname}
            baseClass="flex flex-col gap-3 items-center text-white"
            listClass="flex flex-col text-sm gap-2 items-center"
          />

          <ContactInfo
            baseClass="flex flex-col gap-4 text-white items-center"
            addressClass="min-w-56 ml-2 text-center"
          />
          <Socials />
        </div>
      </div>

      <Copyright />
    </footer>
  );
};

export default MobileFooter;
