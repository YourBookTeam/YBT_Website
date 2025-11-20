import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextWrapper,
  CarouselPreviousWrapper,
  CarouselDots,
} from "../components/ui/carousel";

import TitleBanner from "../components/TitleBanner";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import Milestone from "../components/success-story/Milestone.jsx";
import SvgArrow from "../components/svgs/SvgArrow";
import Review from "../components/success-story/Review";
import OtherBook from "../components/success-story/OtherBook";

import bookshelf from "../assets/success-stories/bookshelf.png";

import promptingHappiness from "../data/success-stories/promptingHappiness.js";
import thirst from "../data/success-stories/thirst.js";
import underTheFloorboards from "../data/success-stories/underTheFloorboards.js";

import { useLocation } from "react-router-dom";

function SuccessStory() {
  const { pathname } = useLocation();
  let content = null;
  switch (pathname) {
    case "/prompting_happiness":
      content = promptingHappiness;
      break;
    case "/thirst":
      content = thirst;
      break;
    case "/under_the_floorboards":
      content = underTheFloorboards;
      break;
    default:
      content = null;
      break;
  }

  return (
    <>
      <TitleBanner>{content ? content.title : "Error"}</TitleBanner>
      {!content ? (
        <div>Content could not be found.</div>
      ) : (
        <div className="flex flex-col gap-24 lg:text-xl">
          {/* Milestone Recap */}
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-[10%] lg:px-[20%] gap-10 lg:gap-[10%]">
            <div className="flex flex-col gap-8">
              <h1 className="text-4xl font-bold">Milestone Recap</h1>
              <div className="flex flex-col gap-4">
                {content.milestones.map((milestone, index) => (
                  <Milestone key={"milestone" + index}>{milestone}</Milestone>
                ))}
              </div>
            </div>
            <img
              src={content.frontCoverImg}
              alt={content.title + " " + "front cover"}
              className="w-50"
            />
          </div>
          {/* The Challenge */}
          <div className="flex flex-col lg:flex-row justify-between items-center px-[10%] lg:px-[20%] gap-10 lg:gap-[10%]">
            <img
              src={content.authorImg}
              alt={content.author}
              className="w-70"
            />
            <div className="flex flex-col gap-8">
              <h1 className="text-4xl font-bold">The Challenge</h1>
              <p>{content.challengeText}</p>
            </div>
          </div>
          {/* The Strategic Pivot */}
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-[10%] lg:px-[20%] gap-10 lg:gap-[10%]">
            <div className="flex flex-col gap-8">
              <h1 className="text-4xl font-bold">The Strategic Pivot</h1>
              <p>{content.strategicPivotText}</p>
            </div>
            <img
              src={content.backCoverImg}
              alt={content.title + " " + "back cover"}
              className="w-50"
            />
          </div>
          {/* The Results */}
          <div className="flex flex-col justify-center sm:items-center px-[10%] lg:px-[20%] gap-8 pb-12">
            <h1 className="text-4xl font-bold">The Results</h1>
            <ul className="flex flex-col gap-4 list-disc">
              {content.results.map((result, index) => (
                <li key={"result" + index}>{result}</li>
              ))}
            </ul>
          </div>
          {/* Book Shelf */}
          <div className="relative h-[389px]">
            <img
              src={bookshelf}
              alt="bookshelf"
              className="absolute w-full h-full z-[-1]"
            />
            {/* Books */}
            <div className="h-full flex justify-around items-end p-10 relative">
              <img
                src={content.bookshelfBooks[0].img}
                alt={content.bookshelfBooks[0].title + " " + "front cover"}
                className="absolute left-10 h-40 sm:relative lg:h-65"
              />
              <img
                src={content.bookshelfBooks[1].img}
                alt={content.bookshelfBooks[1].title + " " + "front cover"}
                className="translate-y-1 absolute left-[20%] sm:left-15 z-10 h-40 sm:relative lg:h-65"
              />
              <img
                src={content.frontCoverImg}
                alt={content.title + " " + "front cover"}
                className="translate-y-2 z-50 h-50 lg:h-75"
              />
              <img
                src={content.bookshelfBooks[2].img}
                alt={content.bookshelfBooks[2].title + " " + "front cover"}
                className="translate-y-1 absolute right-[20%] sm:right-15 z-10 h-40 sm:relative lg:h-65"
              />
              <img
                src={content.bookshelfBooks[3].img}
                alt={content.bookshelfBooks[3].title + " " + "front cover"}
                className="absolute right-10 h-40 sm:relative lg:h-65"
              />
            </div>
          </div>
          {/* Quote */}
          <div className="flex justify-center px-[10%] 2xl:px-[20%]">
            <FaQuoteLeft
              size={100}
              className="fill-gold self-start w-10 sm:w-15 md:w-20 lg:w-25"
            />
            <div className="self-center flex flex-col py-25 sm:px-15 gap-5 flex-1">
              <p className="sm:text-2xl md:text-3xl lg:text-4xl font-medium">
                {content.authorQuote}
              </p>
              <p className="self-end sm:text-xl md:text-2xl lg:text-3xl uppercase">
                {"-" + " " + content.author}
              </p>
            </div>
            <FaQuoteRight
              size={100}
              className="fill-gold self-end w-10 sm:w-15 md:w-20 lg:w-25"
            />
          </div>
          
          {/* Quote */}
          <div className="flex justify-center px-[10%] 2xl:px-[20%]">
            <FaQuoteLeft
              size={100}
              className="fill-gold self-start w-10 sm:w-15 md:w-20 lg:w-25"
            />
            <div className="self-center flex flex-col py-25 sm:px-15 gap-5 flex-1">
              <p className="sm:text-2xl md:text-3xl lg:text-4xl font-medium">
                {content.authorQuote}
              </p>
              <p className="self-end sm:text-xl md:text-2xl lg:text-3xl uppercase">
                {"-" + " " + content.author}
              </p>
            </div>
            <FaQuoteRight
              size={100}
              className="fill-gold self-end w-10 sm:w-15 md:w-20 lg:w-25"
            />
          </div>
          {/* Reviews */}
          <div className="flex flex-col sm:gap-24 text-center">
            {/* Header */}
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl mx-[5%]">
                What Readers Are Saying About
              </h2>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold border-b-3 sm:border-b-4 border-b-gold p-2 sm:p-4">
                {content.title}
              </h2>
            </div>
            {/* Quotes */}
            <Carousel
              key={pathname}
              className="flex flex-col sm:gap-24"
              opts={{ loop: true }}
            >
              <CarouselContent className="flex justify-around">
                {content.reviews.map((review, index) => (
                  <CarouselItem
                    key={"review" + index}
                    className="scale-75 sm:scale-100 lg:basis-1/2 2xl:basis-1/3"
                  >
                    <Review name={review.name}>{review.text}</Review>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center items-start sm:gap-6">
                <CarouselPreviousWrapper className="py-0.75">
                  <SvgArrow className="scale-x-50 sm:scale-x-100" />
                </CarouselPreviousWrapper>
                <CarouselDots />
                <CarouselNextWrapper className="py-0.75">
                  <SvgArrow className="rotate-180 scale-x-50 sm:scale-x-100" />
                </CarouselNextWrapper>
              </div>
            </Carousel>
          </div>
          {/* More Success Stories */}
          <div className="flex flex-col bg-lightest-gold py-24 gap-24 text-center">
            <div className="flex justify-around items-center gap-[5%] px-[5%]">
              <div className="bg-black h-0.5 flex-1" />
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                More Success Stories
              </h2>
              <div className="bg-black h-0.5 flex-1" />
            </div>
            {/* Other Books */}
            <div className="flex flex-wrap justify-around gap-24 px-12">
              {content.moreSuccessStories.map((story, index) => (
                <OtherBook
                  key={"otherBook" + index}
                  title={story.title}
                  author={story.author}
                  imgSrc={story.img}
                  linkTo={story.link}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default SuccessStory;
