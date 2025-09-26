import { FaArrowRight } from "react-icons/fa6";
import Button from "../Button";

function StoryPreview({
  title,
  author,
  coverImgSrc,
  linkTo,
  summary,
  flexReverse = false,
}) {
  let baseClassName = "flex flex-col md:flex-row justify-center items-center gap-10 md:gap-[10%] py-15 px-[15%]";
  if(flexReverse) baseClassName += " md:flex-row-reverse bg-off-white"

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={ baseClassName }>
      <img
        src={coverImgSrc}
        alt={title + " " + "Book Cover"}
        className="h-[250px] md:h-[388px]"
      />

      <div className="flex flex-col items-center gap-5">
         <div className="flex flex-col items-center gap-3 text-4xl font-bold">
           <div className="text-center">{title}</div>
           <div className="bg-gold h-1 w-full"></div>
         </div>
         <div className="text-lg uppercase">{author}</div>

          
         <div className="flex flex-col gap-5">
            {summary.map((paragraph, i) => (
              <p key={i}>{ paragraph }</p>
            ))}
         </div>

         <Button to={linkTo} onClick={scrollToTop} className="md:self-start">
           Learn more
           <FaArrowRight />
         </Button>

       </div>
    </div>
  );
}
export default StoryPreview;
