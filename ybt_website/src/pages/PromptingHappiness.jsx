import TitleBanner from "../components/TitleBanner";
import Milestone from "../components/success-story/Milestone";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

function PromptingHappiness() {
  return (
    <div className="text-xl">
      <TitleBanner>Prompting Happiness</TitleBanner>
      <div className="flex flex-col gap-10">
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
            src="src/assets/book-covers/PromptingHappiness.png"
            alt="Prompting Happiness Book Cover"
            className="w-50"
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
            src="src/assets/book-covers/PromptingHappiness.png"
            alt="Prompting Happiness Book Cover"
            className="w-50"
          />
        </div>
        {/* The Results */}
        <div className="flex flex-col justify-center items-center px-[20%] gap-8">
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
            src="src/assets/bookshelf.png"
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
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-5xl">What Readers Are Saying About</h2>
          <h2 className="text-5xl font-bold border-b-4 border-b-gold p-4">
            Prompting Happiness
          </h2>
        </div>
        <div>reviews</div>
      </div>
    </div>
  );
}

export default PromptingHappiness;
