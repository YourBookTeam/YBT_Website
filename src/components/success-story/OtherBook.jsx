import Button from "../Button";
import { FaArrowRight } from "react-icons/fa6";

function OtherBook({ imgSrc, title, author, linkTo }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <img src={imgSrc} alt={title + " " + "Cover"} className="h-60 lg:h-90" />
      <p className="font-bold md:text-xl lg:text-3xl">{title}</p>
      <p className="uppercase font-secondary">{author}</p>
      <Button gold wide to={linkTo} onClick={scrollToTop} className="gap-2">
        Learn more
        <FaArrowRight />
      </Button>
    </div>
  );
}
export default OtherBook;
