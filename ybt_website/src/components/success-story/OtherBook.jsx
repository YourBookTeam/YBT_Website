import Button from "../Button";
import { FaArrowRight } from "react-icons/fa6";

function OtherBook({ imgSrc, title, author, linkTo }) {
  return (
    <div className="flex flex-col gap-6 items-center">
      <img src={imgSrc} alt={title + " " + "Cover"} className="h-90" />
      <p className="font-bold text-3xl">{title}</p>
      <p className="uppercase font-secondary">{author}</p>
      <Button to={linkTo}>
        Learn more
        <FaArrowRight />
      </Button>
    </div>
  );
}
export default OtherBook;
