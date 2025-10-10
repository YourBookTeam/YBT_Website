import Button from '../Button';
import { FaArrowUp } from "react-icons/fa";

const BackButton = () => {
const scrollToTop = () => {
    window.scrollTo(0,0);
  }
  
  return (
    <Button onClick={scrollToTop} className="w-40 border-2 border-white p-2 flex items-center justify-center gap-2 text-white transition-transform  hover:scale-99 ease-in-out duration-200">
        <FaArrowUp/>
        <div>Back To Top</div>
    </Button>
  );
};

export default BackButton;