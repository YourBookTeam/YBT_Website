import Button from "../Button";
import { FaArrowUp } from "react-icons/fa";

const BackButton = () => {
  const scrollToTop = () => {
   window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-md p-0.5 flex items-center justify-center text-white transition-transform  hover:scale-99 ease-in-out duration-200"
    >
      <div className="w-full h-full flex items-center justify-center rounded-full bg-white border-2 border-[var(--color-gold)]">
        <FaArrowUp className="text-[var(--color-gold)] md:text-xl" />
      </div>
    </Button>
  );
};

export default BackButton;
