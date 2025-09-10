import SvgLogo from "../svgs/SvgLogo";
import Button from "../Button";
import white_brush_mark from "../../assets/white-brush-mark.png";

function HeroBanner() {
  return (
    <div className="hidden lg:flex w-screen relative">
      <div className="relative bg-gold w-[68%] h-180 flex flex-col justify-center items-center">
        <div className="
          flex flex-col self-center justify-center items-start p-14
          gap-10
        ">
          <div className="
            font-bold text-white drop-shadow-hero
            lg:text-7xl
          ">
            We are
          </div>
          <div className="
            font-bold italic drop-shadow-hero
            lg:pr-15 xl:pr-60
            lg:text-8xl
          ">
            Your Book Team
          </div>
          <div className="
            bg-size-[100%_100%] 
            w-150 xl:w-180 2xl:w-200
          " style={{ backgroundImage:`url(${white_brush_mark})`} }>
            <div className="
              font-medium p-10
              text-xl
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
          sm:h-[40%] md:h-[50%] lg:h-[60%] xl:h-[70%] 2xl:h-[80%]
        "></SvgLogo>
      </div>

      <div className="
        relative flex flex-1 overflow-clip
        justify-center
        sm:pl-8 md:pl-10 xl:pl-20 2xl:pl-50
      ">
        <SvgLogo className="
          fill-gold absolute left-0 top-[50%] translate-y-[-50%] translate-x-[-50%] w-auto
          sm:h-[40%] md:h-[50%] lg:h-[60%] xl:h-[70%] 2xl:h-[80%]
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
