import QuickLinks from "./QuickLinks";
import LogoSocials from "./LogoSocials";
import ContactInfo from "./ContactInfo";

const MobileFooter = () => {
    return (
        <footer className="md:hidden px-5 pt-5 pb-2 flex flex-col gap-5 items-center justify-center text-center">
            <ContactInfo/>
            <QuickLinks/>
            <LogoSocials/>
        </footer>
    );
};

export default MobileFooter;
