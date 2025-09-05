import SvgLogo from "../svgs/SvgLogo";
import Button from "../Button";
import white_brush_mark from "../../assets/white-brush-mark.png";

function HeroBanner() {
  return (
    <div className="hidden sm:flex bg-off-white w-screen">

      <div className="relative bg-gold">
        <div className="
          flex flex-col self-center justify-center items-start p-14
          sm:gap-3 md:gap-5 lg:gap-7 xl:gap-12
          sm:mr-10 md:mr-15 lg:mr-20 xl:mr-40
        ">
          <div className="
            font-bold text-white drop-shadow-hero
            sm:text-4xl md:text-4xl xl:text-6xl 
          ">
            We are
          </div>
          <div className="
            font-bold italic drop-shadow-hero
            sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl
          ">
            Your Book Team
          </div>
          <div className="
            bg-size-[100%_100%] 
            sm:w-80 md:w-90 lg:w-150
          " style={{ backgroundImage:`url(${white_brush_mark})`} }>
            <div className="
              font-medium p-10
              sm:text-sm md:text-md lg:text-lg xl:text-xl 
            ">
              We turn aspiring writers into bestselling authors by focusing on
              each story’s heart—turning a shaky first draft into a story that
              outlives you—we build legacy.
            </div>
          </div>
          <Button to="/contact" black className="
            lg:text-lg xl:text-2xl"
          >
            Discovery call
          </Button>
        </div>
        <SvgLogo className="
          fill-off-white absolute right-0 top-[50%] translate-y-[-50%] translate-x-[50%] w-auto
          sm:h-[50%] md:h-[60%] lg:h-[70%]
        "></SvgLogo>
      </div>

      <div className="
        relative flex flex-1 overflow-clip
        justify-end
        sm:pr-8 md:pr-10 xl:pr-20
      ">
        <SvgLogo className="
          fill-gold absolute left-0 top-[50%] translate-y-[-50%] translate-x-[-50%] w-auto
          sm:h-[50%] md:h-[60%] lg:h-[70%] 
        "></SvgLogo>
        <div className="
          flex flex-col h-full justify-around font-black text-gold
          sm:text-5xl md:text-6xl
        ">
          <div>Y</div>
          <div>B</div>
          <div>T</div>
        </div>
      </div>
    </div>
  );
}
export default HeroBanner;
