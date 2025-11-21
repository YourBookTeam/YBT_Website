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
          {/* Bookshelf */}
          <div className="flex flex-col gap-2">
            {/* 1st Shelf */}
            <div className="relative h-[160px] md:h-[150%] flex justify-center items-end">
              <img
                src={bookshelf}
                alt="bookshelf"
                className="absolute w-full h-full z-[-1]"
              />
              {/* 1st Shelf Books */}
              <div className="flex justify-center w-[95%] pb-1 2xl:pb-2">
                <img
                  src={content.bookshelfBooks.a.img}
                  alt={content.bookshelfBooks.a.title + " " + "front cover"}
                  className="max-w-[30%] md:max-w-[14%]"
                />
                <img
                  src={content.bookshelfBooks.main.img}
                  alt={content.bookshelfBooks.main.title + " " + "front cover"}
                  className="max-w-[30%] md:max-w-[14%] md:hidden"
                />
                <img
                  src={content.bookshelfBooks.b.img}
                  alt={content.bookshelfBooks.b.title + " " + "front cover"}
                  className="max-w-[30%] md:max-w-[14%]"
                />
                <img
                  src={content.bookshelfBooks.c.img}
                  alt={content.bookshelfBooks.c.title + " " + "front cover"}
                  className="max-w-[14%] hidden md:flex"
                />
                <img
                  src={content.bookshelfBooks.main.img}
                  alt={content.bookshelfBooks.main.title + " " + "front cover"}
                  className="max-w-[14%] hidden md:flex"
                />
                <img
                  src={content.bookshelfBooks.d.img}
                  alt={content.bookshelfBooks.d.title + " " + "front cover"}
                  className="max-w-[14%] hidden md:flex"
                />
                <img
                  src={content.bookshelfBooks.e.img}
                  alt={content.bookshelfBooks.e.title + " " + "front cover"}
                  className="max-w-[14%] hidden md:flex"
                />
                <img
                  src={content.bookshelfBooks.f.img}
                  alt={content.bookshelfBooks.f.title + " " + "front cover"}
                  className="max-w-[14%] hidden md:flex"
                />
              </div>
            </div>
            {/* Mobile 2nd Shelf */}
            <div className="flex md:hidden relative h-[140px] md:h-[150%] flex justify-center items-end">
              <img
                src={bookshelf}
                alt="bookshelf"
                className="absolute w-full h-full z-[-1]"
              />
              {/* Mobile 2nd Shelf Books */}
              <div className="flex justify-center w-[95%] pb-1 2xl:pb-2">
                <img
                  src={content.bookshelfBooks.c.img}
                  alt={content.bookshelfBooks.c.title + " " + "front cover"}
                  className="max-w-[25%]"
                />
                <img
                  src={content.bookshelfBooks.d.img}
                  alt={content.bookshelfBooks.d.title + " " + "front cover"}
                  className="max-w-[25%]"
                />
                <img
                  src={content.bookshelfBooks.e.img}
                  alt={content.bookshelfBooks.e.title + " " + "front cover"}
                  className="max-w-[25%]"
                />
                <img
                  src={content.bookshelfBooks.f.img}
                  alt={content.bookshelfBooks.f.title + " " + "front cover"}
                  className="max-w-[25%]"
                />
              </div>
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
