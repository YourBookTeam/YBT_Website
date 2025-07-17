import { Link } from "react-router-dom";
import HeroSquiggle from "../svgs/SvgHeroSquiggle";
import SvgPencil from "../svgs/SvgPencil";
import SvgMegaphone from "../svgs/SvgMegaphone";
import SvgBook from "../svgs/SvgBook";

function HeroBanner() {
  return (
    <div className="flex bg-hero-blue text-white gap-8 justify-around w-screen px-20">
      <div className="flex flex-col justify-center items-start gap-12 py-14 w-xl">
        <div className="text-8xl font-black ml-2">We are</div>
        <div className="text-6xl font-black text-saffron italic">
          Your Book Team
        </div>
        {/* <div className="text-8xl font-black ml-2">For</div> */}
        <div className="h-1 w-full bg-white"></div>
        <div className="text-xl ml-3">
          We turn aspiring writers into bestselling authors by focusing on each
          story’s heart—turning a shaky first draft into a story that outlives
          you—we build legacy.
        </div>
        <Link
          to="/services"
          className="bg-saffron px-7 py-2 rounded-lg text-2xl text-black font-semibold"
        >
          Our services
        </Link>
      </div>
      <div className="flex relative w-lg justify-center">
        <HeroSquiggle className="absolute h-full w-full"></HeroSquiggle>
        <div className="grid grid-cols-2 grid-rows-3 z-10 my-30 w-full text-3xl font-semibold">
          <div className="row-1 col-2 bg-hero-red flex flex-col justify-center p-6 pb-3 pl-3 gap-3 rounded-tl-[3rem] rounded-br-[3rem] shadow-[inset_-25px_15px_4px_rgba(0,0,0,0.25)] overflow-clip">
            <SvgPencil className="fill-saffron place-self-end h-20 drop-shadow-[-25px_15px_2px_rgba(0,0,0,0.25)]" />
            <div className="drop-shadow-[-25px_15px_2px_rgba(0,0,0,0.25)]">
              WRITING
            </div>
          </div>
          <div className="row-2 col-1 bg-hero-purple flex flex-col justify-center p-6 pr-9 gap-3 rounded-tl-[3rem] rounded-bl-[3rem] shadow-[inset_-25px_0px_4px_rgba(0,0,0,0.25)] overflow-clip">
            <SvgBook className="fill-saffron place-self-end h-20 drop-shadow-[-25px_15px_2px_rgba(0,0,0,0.25)]" />
            <div className="drop-shadow-[-25px_15px_2px_rgba(0,0,0,0.25)]">
              REFINING
            </div>
          </div>
          <div className="row-3 col-2 bg-hero-green flex flex-col justify-center p-6 pt-3 pl-3 gap-3 rounded-br-[3rem] shadow-[inset_-25px_-15px_4px_rgba(0,0,0,0.25)] overflow-clip">
            <SvgMegaphone className="fill-saffron place-self-end h-20 drop-shadow-[-25px_15px_2px_rgba(0,0,0,0.25)]" />
            <div className="drop-shadow-[-25px_15px_2px_rgba(0,0,0,0.25)]">
              MARKETING
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroBanner;
