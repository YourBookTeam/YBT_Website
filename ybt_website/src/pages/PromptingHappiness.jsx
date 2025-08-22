import TitleBanner from "../components/TitleBanner";
import Milestone from "../components/success-story/Milestone";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import SvgArrow from "../components/svgs/SvgArrow";
import Review from "../components/success-story/Review";
import OtherBook from "../components/success-story/OtherBook";

function PromptingHappiness() {
  return (
    <>
      <TitleBanner>Prompting Happiness</TitleBanner>
      <div className="flex flex-col gap-24 text-xl">
        {/* Milestone Recap */}
        <div className="flex justify-between items-center px-[20%] gap-[10%]">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">Milestone Recap</h1>
            <div className="flex flex-col gap-4">
              <Milestone>Amazon bestseller in multiple categories</Milestone>
              <Milestone>
                Positioned as a rising voice in AI + emotional wellbeing
              </Milestone>
              <Milestone>Invited to podcasts, conferences, and press</Milestone>
              <Milestone>
                Currently writing two more books with us: Prompting Harmony and
                Prompting War
              </Milestone>
            </div>
          </div>
          <img
            src="src/assets/book-covers/PromptingHappiness.png"
            alt="Prompting Happiness Book Cover"
            className="w-50"
          />
        </div>
        {/* The Challenge */}
        <div className="flex justify-between items-center px-[20%] gap-[10%]">
          <img
            src="src/assets/success-stories/prompting-happiness/nimrod-vromen.png"
            alt="Prompting Happiness Book Cover"
            className="w-70"
          />
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">The Challenge</h1>
            <p>
              As a tech-savvy lawyer and founder, Nimrod had insights at the
              intersection of AI, therapy, and self-improvement but his
              manuscript lacked clarity and cohesion. It read like a stream of
              ideas, not a strategic book that could position him as a thought
              leader.
            </p>
          </div>
        </div>
        {/* The Strategic Pivot */}
        <div className="flex justify-between items-center px-[20%] gap-[10%]">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">The Strategic Pivot</h1>
            <p>
              We worked closely with Nimrod to transform scattered content into
              a compelling narrative. Through deep editorial coaching and
              emotional structuring, we helped him find his voice while aligning
              the book with his brand and intellectual goals. A custom-designed
              cover captured the soul-meets-software concept. The result? A book
              that reads with clarity, conviction, and resonance.
            </p>
          </div>
          <img
            src="src/assets/success-stories/prompting-happiness/bc-prompting-happiness.png"
            alt="Prompting Happiness Book Cover"
            className="w-50"
          />
        </div>
        {/* The Results */}
        <div className="flex flex-col justify-center items-center px-[20%] gap-8 pb-12">
          <h1 className="text-4xl font-bold">The Results</h1>
          <ul className="flex flex-col gap-4 list-disc">
            <li>
              Prompting Happiness hit bestseller status and catalyzed Nimrod’s
              personal brand.
            </li>
            <li>
              It led to podcast interviews, press features, and new deal flow
              through audience growth.
            </li>
            <li>
              He became recognized not just as a startup founder, but a
              provocative thinker on emotional tech.
            </li>
            <li>
              He’s now building a Prompting Trilogy with us: Prompting Harmony
              (in progress) and Prompting War (next).
            </li>
          </ul>
        </div>
        {/* Book Shelf */}
        <div className="relative h-[389px]">
          <img
            src="src/assets/success-stories/bookshelf.png"
            alt="bookshelf"
            className="absolute w-full h-full z-[-1]"
          />
          <div className="h-full flex justify-around items-end p-10">
            <img
              src="src/assets/book-covers/UnderTheFloorboards.png"
              alt="Under the Floorboards Cover"
              className="h-65"
            />
            <img
              src="src/assets/book-covers/war_sisters 2.png"
              alt="War Sisters Cover"
              className="h-65"
            />
            <img
              src="src/assets/book-covers/PromptingHappiness.png"
              alt="Prompting Happiness Cover"
              className="h-75"
            />
            <img
              src="src/assets/book-covers/Thirst.png"
              alt="Thirst Cover"
              className="h-65"
            />
            <img
              src="src/assets/book-covers/marias_promise 2.png"
              alt="Maria's Promise Cover"
              className="h-65"
            />
          </div>
        </div>
        {/* Quote */}
        <div className="flex justify-center px-[10%]">
          <FaQuoteLeft size={100} className="fill-gold self-start" />
          <div className="self-center flex flex-col py-25 px-15 gap-5">
            <p className="text-4xl font-medium">
              I am writing two more books with them. That should tell you
              everything.
            </p>
            <p className="self-end text-3xl uppercase font-secondary">
              - Nimrod Vromen
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
              Prompting Happiness
            </h2>
          </div>
          {/* Quotes */}
          <div className="flex justify-around">
            <Review name="Uri Shay">
              “A groundbreaking exploration of true happiness, blending AI and
              positive psychology with practical strategies for personal and
              professional success.”
            </Review>
            <Review name="Verified Amazon Review">
              “A refreshing, uplifting read with simple, practical advice for
              using AI to boost everyday joy.”
            </Review>
            <Review name="Rinat">
              “A life-changing journey of self-discovery and growth, showing how
              AI can optimize health, productivity, and meaningful connections.”
            </Review>
          </div>
          <div className="flex justify-center items-center gap-6">
            <SvgArrow />
            <div className="aspect-1/1 h-5 bg-gray rounded-full" />
            <div className="aspect-1/1 h-5 bg-light-gray rounded-full" />
            <SvgArrow className="rotate-180" />
          </div>
          {/* More Success Stories */}
          <div className="flex flex-col bg-lightest-gold p-24 gap-24">
            <div className="flex justify-around items-center gap-24">
              <div className="bg-black h-0.5 flex-1" />
              <h2 className="text-6xl font-extrabold">More Success Stories</h2>
              <div className="bg-black h-0.5 flex-1" />
            </div>
            {/* Other Books */}
            <div className="flex justify-around">
              <OtherBook
                title="Under the Floorboards"
                author="John Kiss"
                imgSrc="src/assets/book-covers/UnderTheFloorboards.png"
              />
              <OtherBook
                title="Thirst"
                author="H. W. Terrance"
                imgSrc="src/assets/book-covers/Thirst.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PromptingHappiness;
