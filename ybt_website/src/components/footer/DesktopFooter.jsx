import LeftFooter from "./LeftFooter";
import MidFooter from "./MidFooter";
import RightFooter from "./RightFooter";

const DesktopFooter = () => {
  return (
    <footer className="hidden lg:flex px-5 pt-12 pb-0 items-center justify-center text-center">

        <LeftFooter/>
        <MidFooter/>
        <RightFooter/>
        
    </footer>
  );
};

export default DesktopFooter;
