import { FaArrowRight } from "react-icons/fa6";
import Button from "../Button";

function StoryPreview({ title, author, coverImgSrc, linkTo, summary }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-[10%] py-15 px-[15%] even:bg-off-white">
      <img
        src={coverImgSrc}
        alt={title + " " + "Book Cover"}
        className="h-[250px] md:h-[388px]"
      />

      <div className="flex flex-col items-start gap-10">
        <div className="flex flex-col items-start gap-2">
          <div className="text-4xl font-semibold text-gold">{title}</div>
          <div className="text-lg uppercase">{author}</div>
        </div>

        <div className="flex flex-col gap-5">
          {summary.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <Button
          gold
          wide
          to={linkTo}
          onClick={scrollToTop}
          className="md:self-start gap-2"
        >
          Learn more
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}
export default StoryPreview;
