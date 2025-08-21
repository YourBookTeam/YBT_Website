import LeftFooter from "./LeftFooter";
import MidFooter from "./MidFooter";
import RightFooter from "./RightFooter";

const Footer = () => {
  return (
    <footer className="px-5 pt-12 pb-0 flex items-center justify-center text-center">

        <LeftFooter/>
        <MidFooter/>
        <RightFooter/>
        
    </footer>
  );
};

export default Footer;
