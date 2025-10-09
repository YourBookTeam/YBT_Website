import { useLocation } from "react-router-dom";
import QuickLinks from "./QuickLinks";
import Socials from "./Socials";
import ContactInfo from "./ContactInfo";
import MainLogo from "./MainLogo";
import Statement from "./Statement";
import Copyright from "./Copyright";
import BackButton from "./BackButton";

const MobileFooter = () => {
    const currentPage = useLocation();

    return (
        <footer className="lg:hidden bg-gold items-center justify-center text-center">
            <div className="px-5 py-10 flex flex-col items-center gap-15">
                <div className="flex flex-col items-center gap-5">
                    <MainLogo/>
                    <Statement/>
                </div>

                <div className="flex flex-col items-center gap-8">
                    <QuickLinks 
                        currentPage={currentPage.pathname} 
                        baseClass="flex flex-col gap-6 items-center text-white"
                        listClass="flex flex-col text-xl gap-2 items-center"
                    />

                    <ContactInfo
                        baseClass="flex flex-col gap-6 text-white items-center"
                        addressClass="min-w-56 ml-2 text-center"
                    />

                    <Socials/>
                </div>

                <BackButton/>
            </div>

            <Copyright
                className="p-8"
            />

        </footer>
    );
};

export default MobileFooter;
