import { FaArrowRight } from "react-icons/fa6";
import Button from "../Button";

function StoryPreview({
  title,
  author,
  children,
  coverImgSrc,
  flexReverse = false,
}) {
  const className = "flex gap-[10%] justify-center px-[15%] py-15";
  return (
    <div
      className={
        flexReverse
          ? className + " " + "flex-row-reverse bg-off-white"
          : className
      }
    >
      <img src={coverImgSrc} alt={title + " " + "Book Cover"} className="" />
      <div className="flex flex-col items-center gap-5">
        <div className="text-3xl font-semibold">{title}</div>
        <div className="text-2xl font-light">{author}</div>
        <div>{children}</div>
        <Button
          to="/success_stories"
          className="flex items-center self-start gap-2 bg-saffron px-7 py-2 rounded-lg font-semibold"
        >
          Read more
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}
export default StoryPreview;
