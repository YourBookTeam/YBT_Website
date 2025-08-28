import { FaArrowRight } from "react-icons/fa6";
import Button from "../Button";

function StoryPreview({
  title,
  author,
  children,
  coverImgSrc,
  linkTo,
  flexReverse = false,
}) {
  const baseClassName = "flex gap-[10%] justify-center px-[15%] py-15";

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={
        flexReverse
          ? baseClassName + " " + "flex-row-reverse bg-off-white"
          : baseClassName
      }
    >
      <img
        src={coverImgSrc}
        alt={title + " " + "Book Cover"}
        className="h-[388px]"
      />
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-3 text-4xl font-bold">
          <div>{title}</div>
          <div className="bg-gold h-1 w-full"></div>
        </div>
        <div className="text-lg font-secondary uppercase">{author}</div>
        <div>{children}</div>
        <Button to={linkTo} onClick={scrollToTop} className="self-start">
          Learn more
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}
export default StoryPreview;
