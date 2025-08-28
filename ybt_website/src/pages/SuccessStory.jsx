import TitleBanner from "../components/TitleBanner";
import { FaQuoteLeft, FaQuoteRight, FaSquareCheck } from "react-icons/fa6";
import Milestone from "../components/success-story/Milestone.jsx";
import SvgArrow from "../components/svgs/SvgArrow";
import Review from "../components/success-story/Review";
import OtherBook from "../components/success-story/OtherBook";

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
        <div className="flex flex-col gap-24 text-xl">
          {/* Milestone Recap */}
          <div className="flex justify-between items-center px-[20%] gap-[10%]">
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
          <div className="flex justify-between items-center px-[20%] gap-[10%]">
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
          <div className="flex justify-between items-center px-[20%] gap-[10%]">
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
          <div className="flex flex-col justify-center items-center px-[20%] gap-8 pb-12">
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
              src="src/assets/success-stories/bookshelf.png"
              alt="bookshelf"
              className="absolute w-full h-full z-[-1]"
            />
            {/* Books */}
            <div className="h-full flex justify-around items-end p-10">
              <img
                src={content.bookshelfBooks[0].img}
                alt={content.bookshelfBooks[0].title + " " + "front cover"}
                className="h-65"
              />
              <img
                src={content.bookshelfBooks[1].img}
                alt={content.bookshelfBooks[1].title + " " + "front cover"}
                className="h-65"
              />
              <img
                src={content.frontCoverImg}
                alt={content.title + " " + "front cover"}
                className="h-75"
              />
              <img
                src={content.bookshelfBooks[2].img}
                alt={content.bookshelfBooks[2].title + " " + "front cover"}
                className="h-65"
              />
              <img
                src={content.bookshelfBooks[3].img}
                alt={content.bookshelfBooks[3].title + " " + "front cover"}
                className="h-65"
              />
            </div>
          </div>
          {/* Quote */}
          <div className="flex justify-center px-[10%]">
            <FaQuoteLeft size={100} className="fill-gold self-start" />
            <div className="self-center flex flex-col py-25 px-15 gap-5">
              <p className="text-4xl font-medium">{content.authorQuote}</p>
              <p className="self-end text-3xl uppercase font-secondary">
                {"-" + " " + content.author}
              </p>
            </div>
            <FaQuoteRight size={100} className="fill-gold self-end" />
          </div>
          {/* Reviews */}
          <div className="flex flex-col gap-24">
            {/* Header */}
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-5xl">What Readers Are Saying About</h2>
              <h2 className="text-5xl font-bold border-b-4 border-b-gold p-4">
                {content.title}
              </h2>
            </div>
            {/* Quotes */}
            <div className="flex justify-around">
              {content.reviews.map((review, index) => (
                <Review key={"review" + index} name={review.name}>
                  {review.text}
                </Review>
              ))}
            </div>
            <div className="flex justify-center items-center gap-6">
              {/* NOTE: Need to add functionality */}
              <SvgArrow />
              <div className="aspect-1/1 h-5 bg-gray rounded-full" />
              {/* <div className="aspect-1/1 h-5 bg-light-gray rounded-full" /> */}
              <SvgArrow className="rotate-180" />
            </div>
            {/* More Success Stories */}
            <div className="flex flex-col bg-lightest-gold p-24 gap-24">
              <div className="flex justify-around items-center gap-24">
                <div className="bg-black h-0.5 flex-1" />
                <h2 className="text-6xl font-extrabold">
                  More Success Stories
                </h2>
                <div className="bg-black h-0.5 flex-1" />
              </div>
              {/* Other Books */}
              <div className="flex justify-around">
                {content.moreSuccessStories.map((story, index) => (
                  <OtherBook
                    key={"otherBook" + index}
                    title={story.title}
                    author={story.author}
                    imgSrc={story.img}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default SuccessStory;
